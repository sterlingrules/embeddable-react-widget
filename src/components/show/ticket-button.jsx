import React, { Fragment } from 'react'

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
	} = props

	const onClick = () => {
		// track('show_item', {
		// 	action: 'ticket',
		// 	source: source || null,
		// 	show_id: slug
		// })
	}

	return (affiliate || url) ? (
		<a
			href={affiliate || url}
			className={`btn btn-action btn--buy btn--small`}
			title="Get Tickets"
			data-action="Get Tickets"
			target="_blank"
			onClick={onClick}>
			Tickets
		</a>
	) : isFree ? (
		<div
			className={`btn btn--accent-three btn--small pointerevent-none`}
			title="Free">
			Free
		</div>
	) : isPlayable ? (
		<a
			href={`https://getradplaid.com/shows/${slug}`}
			className={`btn btn-action btn--accent btn--small`}
			title="Visit Show"
			target="_blank"
			onClick={onClick}>
			Play
		</a>
	) : (
		<a
			href={`https://getradplaid.com/shows/${slug}`}
			className={`btn btn-action btn--accept btn--small`}
			title="Visit Show"
			target="_blank"
			onClick={onClick}>
			View
		</a>
	)
}

export default TicketButton
