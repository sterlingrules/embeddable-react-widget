import UAParser from 'ua-parser-js'
import { isMobile } from './device-detect'
import { requestPublic } from './request'

export const getDeviceInfo = () => {
	if (typeof window === 'undefined') {
		return
	}

	const result = new UAParser().getResult()
	const deviceInfo = {
		device_category: isMobile ? 'mobile' : 'desktop',
		os: result.os,
		browser: result.browser
	}

	if (isMobile) {
		deviceInfo.mobile = result.device
	}

	return deviceInfo
}

export const t = (data, targets) => {
	if (!process.browser) {
		return
	}

	delete targets.token

	let device = btoa(JSON.stringify(getDeviceInfo()))

	data = btoa(JSON.stringify(data))
	targets = btoa(JSON.stringify(targets))

	requestPublic({ path: `/analytics/track?data=${data}&targets=${targets}&device=${device}` })
		.end()
}

/**
 * Mixpanel/Google Analytics Event Tracker
 *
 * @param name {String} - Name/Category of the event
 * @param data {Object}
 *		@param data.action {String} - Required. The type of interaction (e.g. 'play')
 *		@param data.label {String} - Optional. Useful for categorizing events (e.g. 'Fall Campaign')
 *		@param data.value {String} - Optional. Typically the object that was interacted with (e.g. 'Video')
 */
export const track = (name, data) => {
	if (typeof window === 'undefined') {
		return
	}

	if (process.env.NODE_ENV === 'development') {
		// Tracking Warnings
		if (!data.action) {
			console.warn('`:action` param required. The type of interaction (e.g. \'play\')')
		}

		if (!data.label) {
			console.warn('`:label` param recommended. Useful for categorizing events (e.g. \'Fall Campaign\')')
		}

		if (!data.value) {
			console.warn('`:value` param recommended. Typically the object that was interacted with (e.g. \'Video\')')
		}
	}

	// Track plays
	if (name === 'play' && data.action === 'play') {
		t({ action: 'play', type: 'track' }, data)
	}

	if (name && name.indexOf('show_item') >= 0) {
		// Track impressions
		if (data.action === 'impression') {
			t({ action: 'impression', type: 'track', source: 'widget' }, data)
		}

		// Track tickets
		if (data.action === 'ticket') {
			t({ action: 'ticket', type: 'click', source: 'widget' }, data)
		}

		// Track follow
		if (data.action === 'follow') {
			t({ action: 'follow', type: 'click', source: 'widget' }, data)
		}
	}
	else if (name && name.indexOf('show') >= 0) {
		// Track event url
		if (data.action === 'event_url') {
			t({ action: 'event_url', type: 'click', source: 'widget' }, data)
		}

		// Track tickets
		if (data.action === 'ticket') {
			t({ action: 'ticket', type: 'click', source: 'widget' }, data)
		}

		// Track follow
		if (data.action === 'follow') {
			t({ action: 'follow', type: 'click', source: 'widget' }, data)
		}
	}

	if (name === 'share') {
		t({ action: data.action, type: 'click', source: 'widget' }, data)
	}
}
