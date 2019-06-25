import React, { Component } from 'react'

export const ShowItem = (props) => {
	return (
		<div className="listitem">
			{props.type === 'title' ? (
				<h2>{props.value}</h2>
			) : (
				<>
					<div className="listcell">{props.title}</div>
				</>
			)}
		</div>
	)
}

export default ShowItem
