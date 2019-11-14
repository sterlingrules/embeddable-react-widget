import moment from 'moment'

//
// Date Helpers
//
export const TOMORROW = moment().add(1, 'days').startOf('day').format(process.env.DATE_FORMAT)
export const WEEKEND = moment().isoWeekday(5).startOf('day').format(process.env.DATE_FORMAT)
export const END_OF_WEEKEND = moment(WEEKEND).add(2, 'days').endOf('day').format(process.env.DATE_FORMAT)
export const NEXT_WEEK = moment().isoWeekday(7).add(1, 'weeks').add(1, 'days').startOf('day').format(process.env.DATE_FORMAT)
export const NEXT_WEEKEND = moment().isoWeekday(5).add(1, 'weeks').startOf('day').format(process.env.DATE_FORMAT)

export const getCurrentDate = () => {
	return moment().utc().startOf('day').format(process.env.DATE_FORMAT)
}

export const getDateName = (date) => {
	const _time = (time) => {
		return new Date(time).getTime()
	}

	if (_time(date) < _time(TOMORROW)) {
		return 'today'
	}
	else if (_time(date) >= _time(TOMORROW) && _time(date) < _time(moment(TOMORROW).endOf('day'))) {
		return 'tomorrow'
	}
	else if (_time(date) >= _time(WEEKEND) && _time(date) < _time(END_OF_WEEKEND)) {
		return 'weekend'
	}
	else if (date === NEXT_WEEK) {
		return 'next-week'
	}
	else if (date === NEXT_WEEKEND) {
		return 'next-weekend'
	}
	else {
		return ''
	}
}

export const getDateTitle = (date) => {
	const _time = (time) => {
		return new Date(time).getTime()
	}

	if (_time(date) < _time(TOMORROW)) {
		return 'today'
	}
	else if (_time(date) >= _time(TOMORROW) && _time(date) < _time(moment(TOMORROW).endOf('day'))) {
		return 'tomorrow'
	}
	else if (_time(date) >= _time(WEEKEND) && _time(date) < _time(END_OF_WEEKEND)) {
		return 'weekend'
	}
	else if (date === NEXT_WEEK) {
		return 'next week'
	}
	else if (date === NEXT_WEEKEND) {
		return 'next weekend'
	}
	else {
		return moment(date).format('MMMM Do')
	}
}

export const getDateRange = (shortname = '') => {
	shortname = shortname.replace('/', '').toLowerCase()

	let daterange = {
		from: getCurrentDate(),
		to: ''
	}

	switch(shortname) {
		case 'tomorrow':
			daterange.from = TOMORROW
			break
		case 'weekend':
			daterange.from = WEEKEND
			break
		case 'next-week':
			daterange.from = NEXT_WEEK
			break
		case 'next-weekend':
			daterange.from = NEXT_WEEKEND
			break
		default:
			daterange.from = getCurrentDate()
			break
	}

	return daterange
}

export const getAfterDate = (shows) => {
	let lastShow = shows[shows.length - 1]
	let date

	if (Array.isArray(lastShow)) {
		date = lastShow[lastShow.length - 1].date
	}
	else {
		date = lastShow.date
	}

	return date
}

export const delay = (() => {
	let timer = 0
	return (callback, ms = 250) => {
		clearTimeout (timer)
		timer = setTimeout(callback, ms)
	}
})()

export const events = (function(){
	let topics = {}
	let hOP = topics.hasOwnProperty

	return {
		subscribe: function(topic, listener) {
			// Create the topic's object if not yet created
			if (!hOP.call(topics, topic)) topics[topic] = []

			// Add the listener to queue
			let index = topics[topic].push(listener) -1

			// Provide handle back for removal of topic
			return {
				remove: function() {
					delete topics[topic][index]
				}
			}
		},

		publish: function(topic, info) {
			// If the topic doesn't exist, or there's no listeners in queue, just leave
			if (!hOP.call(topics, topic)) return

			// Cycle through topics queue, fire!
			topics[topic].forEach(function(item) {
				let evt  = info != undefined ? info : {}
				let _evt = evt.topic = topic

				item(evt)
			})
		}
	}
})()
