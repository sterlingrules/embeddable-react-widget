import moment from 'moment'
import React, { Component } from 'react'
import TicketButton from './ticket-button'

const DateStack = ({ date }) => {
	return (
		<div className="datestack">
			<div className="datestack-small">{moment(date).format('ddd')}</div>
			<div className="datestack-large">{moment(date).format('D')}</div>
			<div className="datestack-small">{moment(date).format('MMM')}</div>
		</div>
	)
}

export const ShowItem = (props) => {
	const isPlayable = (
		props.lineup &&
		props.lineup.filter(l => !!(l.preview_url)).length > 0
	)

	return (
		<div className={`listitem ${props.type === 'title' ? 'listitem--headline' : ''}`}>
			{props.type === 'title' ? (
				<h3>{props.value}</h3>
			) : (
				<>
					<div className="listitem-date">
						<DateStack date={props.date} />
					</div>
					<a
						href={`https://getradplaid.com/shows/${props.slug}`}
						target="_blank"
						className="listitem-content">
						{props.reason && (
							<div className="listitem-ryc text-ellipsis">{props.reason}</div>
						)}
						<div className="listitem-title">{props.title}</div>
						{props.venue && (
							<div className="listitem-venue">{props.venue.name}</div>
						)}
					</a>
					<div className="listitem-action">
						<a
							href={`https://getradplaid.com/shows/${props.slug}`}
							className="btn btn--accept btn--knockout btn--small"
							target="_blank">
							Follow
						</a>
						<TicketButton
							slug={props.slug}
							url={props.ticket_url}
							affiliate={props.ticket_affiliate}
							advancePrice={props.advance_price}
							doorPrice={props.door_price}
							isFree={(!props.advance_price && !props.door_price)}
							isPlayable={isPlayable}
							source="show_item" />
					</div>
				</>
			)}
		</div>
	)
}

export default ShowItem
