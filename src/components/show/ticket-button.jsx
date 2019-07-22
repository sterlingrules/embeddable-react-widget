import React, { Fragment } from 'react'
import { track } from './../helpers/analytics'

const TicketButton = (props) => {
	const {
		value,
		slug,
		url,
		affiliate,
		source,
		advancePrice,
		doorPrice,
		isFree = false,
		isPlayable = false,
		buttonStyle = {}
	} = props

	const hostname = (typeof window !== 'undefined') ? window.location.hostname : 'website'
	const onClick = ({ name }) => {
		track('show_item', {
			action: name,
			source: 'widget',
			show_id: slug
		})
	}

	return (affiliate || url) ? (
		<a
			href={`${affiliate || url}?utm_source=ticket&utm_medium=widget&utm_campaign=${hostname}`}
			className={`btn btn-action btn--buy btn--small`}
			title="Get Tickets"
			data-action="Get Tickets"
			name="tickets"
			target="_blank"
			style={buttonStyle}
			onClick={onClick}>
			Tickets
		</a>
	) : isFree ? (
		<a
			href={`https://getradplaid.com/shows/${slug}?utm_source=free&utm_medium=widget&utm_campaign=${hostname}`}
			className={`btn btn--accent-three btn--small`}
			title="Free"
			name="free"
			target="_blank"
			style={buttonStyle}
			onClick={onClick}>
			Free
		</a>
	) : isPlayable ? (
		<a
			href={`https://getradplaid.com/shows/${slug}?utm_source=play&utm_medium=widget&utm_campaign=${hostname}`}
			className={`btn btn-action btn--accent btn--small`}
			title="Play"
			name="play"
			target="_blank"
			style={buttonStyle}
			onClick={onClick}>
			Play
		</a>
	) : (
		<a
			href={`https://getradplaid.com/shows/${slug}?utm_source=view&utm_medium=widget&utm_campaign=${hostname}`}
			className={`btn btn-action btn--accept btn--small`}
			title="Visit Show"
			name="view"
			target="_blank"
			style={buttonStyle}
			onClick={onClick}>
			View
		</a>
	)
}

export default TicketButton
