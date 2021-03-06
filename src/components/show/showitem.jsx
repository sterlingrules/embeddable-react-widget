import moment from 'moment'
import React, { Component } from 'react'
import ShowItemActions from './showitem-actions'
import TrackImpression from './../common/track-impression'

const DateStack = ({ date, listColor = {} }) => {
	return (
		<div className="datestack" style={listColor}>
			<div className="datestack-small" style={listColor}>{moment(date).format('ddd')}</div>
			<div className="datestack-large" style={listColor}>{moment(date).format('D')}</div>
			<div className="datestack-small" style={listColor}>{moment(date).format('MMM')}</div>
		</div>
	)
}

const getButtonStyle = ({ buttonTextColor, buttonBackground }) => {
	let style = {}

	if (buttonTextColor) {
		style.color = buttonTextColor
	}

	if (buttonBackground) {
		style.backgroundColor = buttonBackground
	}

	return style
}

const getButtonEmptyStyle = ({ buttonBackground }) => {
	let style = {}

	if (buttonBackground) {
		style.color = buttonBackground
		style.border = `2px solid ${buttonBackground}`
		style.backgroundColor = 'transparent'
	}

	return style
}

const getListItemStyle = ({ keylineColor }) => {
	return keylineColor ? { borderTopColor: keylineColor } : {}
}

export const ShowItem = (props) => {
	const isPlayable = (
		props.lineup &&
		props.lineup.filter(l => !!(l.preview_url)).length > 0
	)

	const buttonStyle = getButtonStyle(props)
	const buttonEmptyStyle = getButtonEmptyStyle(props)
	const listItemStyle = getListItemStyle(props)
	const rycColor = props.accentColor ? { color: `${props.accentColor} !important` } : {}
	const listColor = props.primaryColor ? { color: `${props.primaryColor} !important` } : {}

	return (
		<TrackImpression
			name="show_item"
			data={{
				show_id: props.slug,
				value: props.slug,
				index: props.index
			}}>

			<div
				className={`listitem ${props.type === 'title' ? 'listitem--headline' : ''}`}
				style={listItemStyle}>

				{props.type === 'title' ? (
					<h3>{props.value}</h3>
				) : (
					<>
						<div className="listitem-date">
							<DateStack
								date={props.date}
								style={listColor} />
						</div>
						<a
							href={`https://getradplaid.com/shows/${props.slug}`}
							target="_blank"
							className="listitem-content"
							style={listColor}>

							{props.featured && (
								<div className="sponsor-block">
									<div className="violator violator--radplaid">Certified Rad</div>
								</div>
							)}

							{props.reason && (
								<div className="listitem-ryc" style={rycColor}>{props.reason}</div>
							)}

							<div className="listitem-date" style={listColor}>{moment(props.date).format('ddd, MMMM D, YYYY')}</div>
							<div className="listitem-title" style={listColor}>{props.title}</div>

							{props.venue && (
								<div className="listitem-venue" style={listColor}>{props.venue.name}</div>
							)}
						</a>
						<div className="listitem-action">
							{(props.elementSize !== 'small tiny') && (
								<a
									href={`https://getradplaid.com/shows/${props.slug}`}
									className="btn btn--accept btn--knockout btn--small"
									style={buttonEmptyStyle}
									target="_blank">
									Follow
								</a>
							)}

							<ShowItemActions
								slug={props.slug}
								url={props.ticket_url}
								affiliate={props.ticket_affiliate}
								advancePrice={props.advance_price}
								doorPrice={props.door_price}
								isFree={(!props.advance_price && !props.door_price)}
								isPlayable={isPlayable}
								elementSize={props.elementSize}
								style={buttonStyle}
								source="show_item" />
						</div>
					</>
				)}
			</div>
		</TrackImpression>
	)
}

export default ShowItem
