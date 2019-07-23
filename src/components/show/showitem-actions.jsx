import React, { Fragment } from 'react'
import { track } from './../helpers/analytics'

const ShowItemActions = (props) => {
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
		elementSize = 'large',
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

	return (elementSize === 'small tiny') ? (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="icon"
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="currentColor"
			focusable="false">
			<path d="M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z"/>
		</svg>
	) : (affiliate || url) ? (
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
			Listen
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

export default ShowItemActions
