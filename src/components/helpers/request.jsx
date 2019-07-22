import superagent from 'superagent'

const RETRY_COUNT = 3

const apiError = (err) => console.error(err)

const timeoutOptions = {
	response: 10000 * 2, // Wait 10 seconds for the server to start sending,
	deadline: 30000 // but allow 30 seconds for the file to finish loading.
}

export const requestPublic = (_settings = {}) => {
	let settings = Object.assign({
		path: '',
		method: 'get',
		data: {}
	}, _settings)

	// return superagent[settings.method](`${process.env.BASE_SERVER_URL}/${process.env.API_VERSION}${settings.path}`)
	return superagent[settings.method](`http://localhost:8000/${process.env.API_VERSION}${settings.path}`)
		.timeout(timeoutOptions)
		.set('Content-Type', 'application/json')
		.set('x-radplaid-client-id', process.env.RADPLAID_CLIENT_ID)
		.on('error', apiError)
		.send(settings.data)
}


/*
 * Queries Rad Plaid API Server
 *
 * @param _settings {Object}
 * @param _settings.path {String} - API request path without `process.env.BASE_SERVER_URL` (ie. `/shows/create`)
 * @param _settings.method {String} - API method. Defaults to `get`
 * @param _settings.data {Object} - API data object if method is `post || put`
 *
 * @return
 *      {err} - If error, will return error data
 *      {reply} - If successful, returns completed request data
 */
export const request = (_settings = {}) => {
	let worker
	let token = User.getToken()
	let jwt = token ? token : ''
	let settings = Object.assign({
		path: '',
		method: 'get',
		data: {}
	}, _settings)

	if (!jwt) {
		return requestPublic(_settings)
	}

	// If we can, let's use `ServiceWorker`
	if (typeof window !== 'undefined' && 'serviceWorker' in navigator && 'fetch' in window) {
		worker = new Worker('/js/service-worker.js')

		settings.path = `${process.env.BASE_SERVER_URL}/${process.env.API_VERSION}${settings.path}`
		settings.headers = {
			'Content-Type': 'application/json',
			'x-radplaid-client-id': process.env.RADPLAID_CLIENT_ID,
			'Authorization': `Bearer ${jwt}`
		}

		worker.postMessage({ ...settings })

		return {
			end: (callback) => {
				worker.addEventListener('message', ({ data }) => {
					if (typeof callback === 'function') {
						return callback(data.error, data)
					}
				})
			}
		}
	}

	return superagent[settings.method](`${process.env.BASE_SERVER_URL}/${process.env.API_VERSION}${settings.path}`)
		.timeout(timeoutOptions)
		.retry(RETRY_COUNT, (err, reply) => retrying(err))
		.set('Content-Type', 'application/json')
		.set('Authorization', `Bearer ${jwt}`)
		.set('x-radplaid-client-id', process.env.RADPLAID_CLIENT_ID)
		.on('error', apiError)
		.send(settings.data)
}
