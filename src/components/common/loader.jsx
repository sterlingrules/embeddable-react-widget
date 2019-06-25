import React from 'react'

export const Loader = ({ size, progress }) => {
	return (typeof progress === 'number' ? (
		<div className={`loader loader--noanimate loader--${size || 'large'}`}>
			<div className="loader-inset">
				<div className="loader-pill" style={{ transform: `translateX(${progress - 100}%)` }} />
			</div>
		</div>
	) : (
		<div className={`loader loader--${size || 'large'}`}>
			<div className="loader-pill" />
		</div>
	))
}

export const LoadingCopyComponent = ({ showsLength }) => {
	return (showsLength > 0 ? (
			<li className="showlist-endcap">
				<Loader />
			</li>
		) : (
			<li className="bubble showitem-empty text-center">
				<div className="bubble-content">
					<h2 className="typography-subheadline">Finding you the raddest shows, hang tight!</h2>
				</div>
			</li>
		)
	)
}
