import React from 'react'
import { getDateTitle } from './../helpers'

const SearchSummary = ({ summary }) => {
	const keys = Object.keys(summary)

	return (
		<div className="search-summary">
			<div className="search-summary-content">
				{keys.map((key, index) => (
					<div key={index} className={`violator violator--${key}`}>
						{key === 'date' ? getDateTitle(summary[key]) : summary[key]}
					</div>
				))}
			</div>
		</div>
	)
}

export default SearchSummary
