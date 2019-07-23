import React from 'react'
import { getDateTitle } from './../helpers'

const SearchSummary = ({ title, summary }) => {
	const keys = Object.keys(summary)
	const hostname = (typeof window !== 'undefined') ? window.location.hostname : 'website'

	return (
		<div className="search-summary">
			<div className="search-summary-content">
				{title ? (
					<div className="headline text-ellipsis">{title}</div>
				) : keys.map((key, index) => (
					<div key={index} className={`violator violator--${key}`}>
						{key === 'date' ? getDateTitle(summary[key]) : summary[key]}
					</div>
				))}
			</div>
			<a
				href={`https://getradplaid.com/add/1?utm_source=add&utm_medium=widget&utm_campaign=${hostname}`}
				className="btn btn--accent btn--round">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon"
					width="48"
					height="48"
					viewBox="0 0 48 48"
					fill="currentColor"
					focusable="false">
					<path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z"/>
				</svg>
				<span className="text">Add Show</span>
			</a>
		</div>
	)
}

export default SearchSummary
