import React from 'react'

const style = {
	display: 'block',
	float: 'right',
	width: 112,
	height: 20,
	// backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABkCAYAAABaQU4jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkJCNTY4RUY4RUFDMTFFOTkwNjE5RjREQ0NFMkVDQTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkJCNTY4RjA4RUFDMTFFOTkwNjE5RjREQ0NFMkVDQTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQkI1NjhFRDhFQUMxMUU5OTA2MTlGNERDQ0UyRUNBOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQkI1NjhFRThFQUMxMUU5OTA2MTlGNERDQ0UyRUNBOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqDcqFkAABTxSURBVHja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')`,
	// backgroundPosition: 'center',
	// backgroundSize: 'cover',
}

const logoStyle = {
	display: 'flex',
	paddingTop: 16,
	paddingBottom: 16,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'flex-end',
	textAlign: 'right',
	textDecoration: 'none',
}

const poweredByStyle = {
	marginTop: 2,
	fontFamily: '"Barlow", "Proxima", "Helvetica", -apple-system, sans-serif',
	fontSize: 14,
}

const getColor = (theme) => {
	switch (theme) {
		case 'dark':
			return '#ffffff'
		default:
			return '#3f5765'
	}
}

const Logo = ({ theme, logoColor }) => {
	const defaultColor = getColor(theme)

	return (
		<a href="https://getradplaid.com/" style={{ ...logoStyle, color: logoColor || defaultColor }} target="_blank">
			<span style={poweredByStyle}>Powered by</span>
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				fill="currentColor"
				focusable="false"
				width={style.width}
				height={style.height}
				style={style}
				viewBox="0 0 200 42">
				<g>
					<path d="M41.2,31.5c0.1,1,0.2,1.9,0.3,2.8c0.3,1.5,0.5,2.9,0.9,4.3c0.7,2,2.8,2.4,4.3,1.1c0.4-0.3,0.7-0.7,1-1.1
						c1.7-2.3,3.4-4.7,5.1-7c0.4-0.6,0.8-1.2,1.2-1.8c0.1,0.7,0.1,1.2,0.3,1.8c0.7,1.8,1.8,3.3,3.4,4.5c0.9,0.7,1.9,0.8,2.8,0.2
						c1.4-0.9,2.8-1.8,4.1-2.7c1.3-1,2.5-2,3.8-3c0.3,1,0.6,1.9,0.9,2.8c0.5,1.5,1.2,2.9,2.4,4c1,1,2,1.1,3.2,0.4
						c0.6-0.4,1.3-0.8,1.8-1.4c4.2-4.1,7.7-8.7,10.6-13.7c0.3-0.6,0.6-1.2,0.8-1.8c0.3-0.8-0.3-1.6-1.1-1.6c-0.4,0-0.9,0.3-1.2,0.6
						c-1.6,1.6-3,3.3-4.6,4.9c-1.5,1.5-2.9,3-4.4,4.5c-0.3,0.3-0.7,0.4-1.3,0.7c0-0.5,0-0.8,0-1.2c0.1-2.4,0.2-4.9,0.4-7.3
						c0.3-4,0.7-8.1,1-12.1c0.1-1.7,0.4-3.4,0.3-5.1c0-1.5-0.7-2.7-2.1-3.4c-0.8-0.4-1.2-0.3-1.7,0.5c-0.3,0.6-0.6,1.2-0.8,1.8
						c-1.6,4.8-2.5,9.8-3.5,14.8c-0.1,0.5-0.2,1-0.4,1.4c-1.9,2.3-3.9,4.6-5.8,6.8c-0.5,0.5-1,1-1.6,1.4c-0.3,0.2-0.7,0.3-1,0.5
						c-0.1-0.4-0.2-0.8-0.1-1.2c0.1-0.9,0.2-1.7,0.4-2.5c0.6-2.4,1.3-4.7,2.1-7c0.3-1,0.6-1.1,1.6-0.6c0.8,0.4,1.6,0.9,2.4,1.3
						c0.5,0.3,0.9,0.2,1.3-0.2c0.4-0.4,0.1-0.8-0.2-1.1c-1.2-1.4-2.7-2.4-4.5-3.1c-0.8-0.3-1.6-0.2-2.2,0.5c-1.1,1.4-2.2,2.8-3.1,4.3
						C57.4,19.7,57,21,56.3,22c-2.8,4-5.6,7.9-8.4,11.9c-0.1,0.2-0.3,0.4-0.4,0.6c-0.1,0-0.2,0-0.2-0.1c0.2-1.3,0.4-2.5,0.7-3.8
						c0.7-2.9,1.5-5.8,2.3-8.7c0.5-1.8,0-3.2-1.4-4.3c-1.3-1.2-2-1.3-3.4-0.1c-2.7,2.3-5.4,4.6-8,6.9c-1.5,1.3-3,2.7-4.5,4.1
						c0-0.2,0.1-0.3,0.1-0.4c1.1-3.5,2.6-6.9,4.5-10.1c1.2-2,1.4-2.1,3.4-1c0.8,0.4,1.3,0.3,1.8-0.4c0.5-0.6,0.4-1.2-0.1-1.7
						c-0.3-0.3-0.6-0.7-1-1c-2.8-1.8-3.8-1.5-5.7,0.3c-0.3,0.3-0.7,0.7-1,1c-2.6,2.8-4.8,5.9-6.8,9.1c-1.1,1.8-2.1,3.7-3.1,5.5
						c-2.2-3-4.4-5.9-6.7-8.9c1.9-1.8,3.7-3.4,5.5-5.2c1.7-1.7,3.3-3.5,5-5.3c0.7-0.8,0.9-1.6,0.6-2.7c-0.8-2.8-2.5-4.9-4.8-6.6
						c-1.5-1.1-3.2-1.4-5-0.9C14.2,2,9,4.4,4.1,7.4C2.9,8.1,1.8,9,0.9,9.9c-1.1,1-1.1,2.1-0.1,3.3c0.2,0.2,0.3,0.4,0.5,0.6
						c1.5,1.4,1.9,1.4,3.7,0.5c4.1-2.3,8.1-4.7,12.5-6.4c1.5-0.6,3.1-0.9,4.7-1.2c0.3-0.1,0.8,0.2,1.1,0.5C24,8,24,8.5,23.2,9.5
						c-0.1,0.2-0.3,0.4-0.5,0.5c-3,3.1-6,6.3-8.9,9.4c-0.1,0.1-0.3,0.2-0.5,0.4c0.1-0.5,0.1-0.8,0.1-1.1c0.2-1.3,0.3-2.6,0.6-3.9
						c0.1-0.8-0.2-1.2-0.7-1.7c-1.4-1.1-2-1.1-2.7,0.5c-2.7,5.4-4.7,11-5.7,16.9c-0.1,0.8,0,1.5,0.6,2.1C6.7,33.8,7.9,35,9.2,36
						c1.6,1.2,2.1,1,2.4-1c0.5-3.1,0.8-6.3,1.2-9.5c0.2-1.3,0.4-1.6,1.7-2c0.1,0.2,0.2,0.5,0.3,0.7c2.3,4.8,4.6,9.6,7.9,13.9
						c0.8,1,1.7,1.9,2.7,2.7c1,0.8,1.6,0.7,2.6,0.1c1.6-1.1,3-2.3,4.2-3.9c0.1-0.2,0.3-0.3,0.5-0.4c1.1-0.6,2.2-1.2,3.3-1.9
						C37.9,33.7,39.5,32.6,41.2,31.5z M180.3,30.6c0.3,0.9,0.5,1.8,0.9,2.7c0.5,1.5,1.2,2.9,2.4,4c1,1,2,1.1,3.2,0.3
						c0.7-0.4,1.3-0.9,1.9-1.4c4.3-4.1,7.8-8.9,10.7-14c0.3-0.5,0.5-1,0.6-1.5c0.2-0.5,0-1-0.5-1.4c-0.5-0.3-1-0.3-1.4,0.1
						c-0.3,0.3-0.6,0.5-0.9,0.8c-1.3,1.5-2.7,3-4,4.4c-1.5,1.6-3,3.1-4.5,4.6c-0.3,0.3-0.7,0.4-1.2,0.7c0-0.5,0-0.8,0-1.1
						c0.1-2.5,0.2-4.9,0.4-7.3c0.3-4,0.7-8.1,1-12.1c0.1-1.7,0.4-3.4,0.3-5.1c0-1.5-0.7-2.8-2.1-3.5c-0.7-0.3-1.2-0.2-1.6,0.5
						c-0.3,0.6-0.6,1.2-0.8,1.9c-1.6,4.8-2.5,9.8-3.5,14.8c-0.1,0.5-0.2,1-0.5,1.4c-1.9,2.3-3.8,4.5-5.7,6.7c-0.6,0.7-1.4,1.3-2.2,1.9
						c-0.5,0.4-0.8,0.2-0.7-0.4c0.1-1,0.2-2.1,0.5-3.1c0.6-2.4,1.3-4.8,2.1-7.2c0.3-0.9,0.6-0.9,1.4-0.5c0.8,0.4,1.6,0.8,2.3,1.3
						c0.5,0.3,1.1,0.4,1.5-0.1c0.4-0.5,0-0.9-0.4-1.3c-1.2-1.2-2.5-2.2-4.1-2.8c-1-0.4-1.8-0.3-2.5,0.5c-1.1,1.4-2.2,2.9-3.2,4.3
						c-0.6,0.9-0.9,1.9-1.5,2.7c-1,1.3-2.1,2.6-3.1,3.8c-0.6,0.7-1.2,1.5-1.7,2.2c-0.1,0-0.1-0.1-0.2-0.1c0.2-2.3,0.3-4.6,0.6-6.9
						c0.2-1.2-0.2-2.1-1-2.9c-0.4-0.4-0.8-0.8-1.2-1.1c-1.4-1.1-1.8-1-2.7,0.4c-0.4,0.6-0.7,1.2-1.1,1.8c-0.6,1-1.2,2-1.8,2.9
						c-2.8,4-5.7,8-8.6,12c-0.2,0.3-0.4,0.5-0.5,0.8c-0.1,0-0.2-0.1-0.2-0.1c0.2-1.3,0.4-2.5,0.7-3.8c0.7-3,1.6-5.9,2.4-8.8
						c0.2-0.8,0.3-1.7-0.1-2.5c-0.6-1.3-1.5-2.3-2.9-2.7c-1-0.3-1.7,0.6-2.3,1.2c-3.8,3.3-7.5,6.6-11.3,9.9c-0.2,0.2-0.4,0.4-0.6,0.6
						c1.1-3.8,2.6-7.5,4.7-10.8c1-1.6,1.2-1.6,2.9-0.8c0.1,0,0.2,0.1,0.3,0.1c0.7,0.4,1.3,0.2,1.8-0.4c0.5-0.6,0.5-1.2-0.1-1.7
						c-0.7-0.6-1.4-1.2-2.2-1.6c-1.5-0.8-2.9-0.8-4.1,0.6c-1.6,1.8-3.3,3.6-4.7,5.5c-2.9,3.8-5.6,7.7-8.5,11.5c-0.4,0.5-0.8,0.9-1.4,1.5
						c0-0.4-0.1-0.5-0.1-0.6c0.3-4.2,0.4-8.3,0.9-12.5c0.5-4,1.3-7.9,2-11.9c0.2-0.9,0.1-1.8-0.4-2.5c-0.7-0.8-1.3-1.7-2.1-2.4
						c-1.2-1-1.5-1-2.2,0.4c-1,2.3-1.9,4.6-2.6,6.9c-1.8,6-2.9,12.1-2,18.4c0.4,2.9,1.3,5.8,3,8.2c0.5,0.7,1.2,1.3,1.9,1.9
						c0.6,0.5,1.1,0.4,1.7-0.2c0.4-0.5,0.9-0.9,1.2-1.4c0.8-1,1.5-2,2.2-3c0.1,0.2,0.2,0.4,0.3,0.6c1.6,3.1,4.1,4,7.1,2.3
						c2.7-1.4,5.2-3.1,7.7-4.7c0.2-0.1,0.4-0.2,0.6-0.4c0.1,1,0.2,1.9,0.3,2.8c0.3,1.5,0.5,2.9,0.9,4.3c0.7,2,2.8,2.4,4.3,1.1
						c0.4-0.3,0.8-0.7,1.1-1.1c2.9-3.3,5.1-7,7.5-10.7c0.2-0.3,0.3-0.5,0.5-0.8c0.1,0.8,0.2,1.5,0.4,2.2c0.5,1.8,1.3,3.5,2.9,4.7
						c1.4,1.1,2.4,1,3.8-0.1c0.5-0.4,0.9-0.8,1.3-1.3c0.7-0.8,1.4-1.6,2.1-2.4c0.3,2.6,1.8,4.5,3.8,6c0.9,0.6,1.8,0.7,2.7,0.2
						c0.8-0.4,1.6-0.9,2.3-1.4C176.5,33.5,178.4,32,180.3,30.6z M99.4,19.9c0-0.2,0-0.4,0-0.5c0.2-1.2,0.4-2.5,0.6-3.7
						c0.3-1.8,0.2-2-1.4-2.9c0,0-0.1-0.1-0.1-0.1c-0.6-0.4-1-0.3-1.4,0.4c-2.8,5.2-5,10.5-6.1,16.3c-0.2,1.3-0.5,2.6,0.5,3.8
						c1.1,1.3,2.3,2.4,3.8,3.2c1.5,0.8,1.9,0.6,2.2-1c0.5-3.3,0.8-6.7,1.3-10c0-0.3,0.3-0.7,0.5-0.9c3.7-2.8,7.4-5.6,11-8.5
						c1.8-1.5,3.3-3.4,4.9-5.2c0.7-0.8,0.9-1.9,0.5-3c-0.7-2.5-2.1-4.6-4.3-6.2c-1.5-1.1-3.1-1.6-4.9-1.1C100,2,94.1,4.8,88.6,8.6
						c-0.8,0.5-1.5,1.2-2.1,2c-0.7,0.9-0.7,1.6,0.1,2.4c0.6,0.6,1.2,1.1,1.9,1.6c0.5,0.4,1.1,0.4,1.8,0.1c1.2-0.6,2.5-1.3,3.8-1.9
						c4.1-1.9,8.2-3.9,12.4-5.8c0.6-0.3,1.3-0.4,2-0.5c1-0.1,1.4,0.7,1.8,1.4c0.4,0.6-0.1,0.9-0.5,1.3c-3.3,3.4-6.6,6.9-9.9,10.3
						C99.6,19.7,99.5,19.7,99.4,19.9z M160.9,13.6c0.2-0.1,0.5-0.1,0.7-0.2c1.4-0.8,2.5-2,3.2-3.4c0.2-0.4,0.1-1-0.1-1.3
						c-0.8-1-1.8-1.9-2.7-2.8c-0.4-0.4-1-0.4-1.4-0.1c-1,0.8-2,1.6-2.9,2.5c-0.4,0.4-0.7,1.1-0.4,1.7c0.7,1.4,1.6,2.6,3.1,3.3
						C160.4,13.5,160.6,13.5,160.9,13.6z"/>
					<path d="M41.2,31.5c-1.7,1.1-3.4,2.2-5.1,3.2c-1.1,0.7-2.2,1.3-3.3,1.9c-0.2,0.1-0.4,0.2-0.5,0.4c-1.1,1.6-2.6,2.8-4.2,3.9
						c-1,0.7-1.7,0.7-2.6-0.1c-1-0.8-1.9-1.7-2.7-2.7c-3.3-4.3-5.6-9.1-7.9-13.9c-0.1-0.2-0.2-0.5-0.3-0.7c-1.3,0.4-1.6,0.7-1.7,2
						c-0.4,3.2-0.7,6.3-1.2,9.5c-0.3,2-0.8,2.2-2.4,1c-1.3-1-2.6-2.2-3.8-3.4c-0.6-0.5-0.8-1.2-0.6-2.1c1-6,3.1-11.5,5.7-16.9
						c0.8-1.6,1.4-1.6,2.7-0.5c0.5,0.4,0.8,0.9,0.7,1.7c-0.2,1.3-0.4,2.6-0.6,3.9c0,0.3-0.1,0.7-0.1,1.1c0.3-0.2,0.4-0.3,0.5-0.4
						c3-3.1,6-6.3,8.9-9.4c0.2-0.2,0.3-0.4,0.5-0.5c0.8-1,0.8-1.5,0-2.4c-0.2-0.3-0.7-0.5-1.1-0.5c-1.6,0.3-3.2,0.6-4.7,1.2
						C13.1,9.5,9,11.9,4.9,14.2c-1.8,1-2.2,0.9-3.7-0.5c-0.2-0.2-0.4-0.4-0.5-0.6c-1-1.2-1-2.3,0.1-3.3c1-0.9,2.1-1.8,3.2-2.5
						C9,4.4,14.2,2,19.7,0.3c1.8-0.5,3.5-0.2,5,0.9c2.3,1.6,4,3.8,4.8,6.6c0.3,1,0.1,1.9-0.6,2.7c-1.7,1.8-3.3,3.6-5,5.3
						c-1.8,1.7-3.6,3.4-5.5,5.2c2.2,3,4.5,5.9,6.7,8.9c1.1-1.9,2-3.7,3.1-5.5c2-3.2,4.2-6.3,6.8-9.1c0.3-0.3,0.7-0.7,1-1
						c1.8-1.8,2.8-2.1,5.7-0.3c0.4,0.2,0.7,0.6,1,1c0.5,0.5,0.6,1.1,0.1,1.7c-0.6,0.7-1.1,0.8-1.8,0.4c-2-1.1-2.2-1-3.4,1
						c-1.9,3.2-3.4,6.6-4.5,10.1c0,0.1,0,0.2-0.1,0.4c1.6-1.4,3-2.8,4.5-4.1c2.6-2.3,5.3-4.6,8-6.9c1.4-1.1,2.1-1,3.4,0.1
						c1.3,1.2,1.8,2.6,1.4,4.3c-0.8,2.9-1.6,5.8-2.3,8.7c-0.3,1.2-0.5,2.5-0.7,3.8c0.1,0,0.2,0,0.2,0.1c0.1-0.2,0.3-0.4,0.4-0.6
						c2.8-4,5.6-7.9,8.4-11.9c0.7-1,1.1-2.3,1.8-3.3c1-1.5,2.1-2.9,3.1-4.3c0.6-0.7,1.4-0.8,2.2-0.5c1.7,0.6,3.2,1.7,4.5,3.1
						c0.3,0.3,0.5,0.7,0.2,1.1c-0.4,0.4-0.8,0.5-1.3,0.2c-0.8-0.4-1.6-0.9-2.4-1.3c-1-0.5-1.2-0.4-1.6,0.6c-0.7,2.3-1.4,4.7-2.1,7
						c-0.2,0.8-0.3,1.7-0.4,2.5c0,0.4,0.1,0.8,0.1,1.2c0.3-0.2,0.7-0.3,1-0.5c0.6-0.4,1.1-0.9,1.6-1.4c2-2.3,3.9-4.5,5.8-6.8
						c0.3-0.3,0.4-0.9,0.4-1.4c0.9-5,1.8-10,3.5-14.8c0.2-0.6,0.5-1.2,0.8-1.8c0.4-0.8,0.8-0.9,1.7-0.5c1.4,0.7,2.1,2,2.1,3.4
						c0,1.7-0.2,3.4-0.3,5.1c-0.3,4-0.7,8.1-1,12.1c-0.2,2.4-0.2,4.8-0.4,7.3c0,0.3,0,0.6,0,1.2c0.5-0.3,1-0.4,1.3-0.7
						c1.5-1.5,3-3,4.4-4.5c1.5-1.6,3-3.3,4.6-4.9c0.3-0.3,0.8-0.6,1.2-0.6c0.8-0.1,1.4,0.7,1.1,1.6c-0.2,0.6-0.5,1.2-0.8,1.8
						c-3,5-6.4,9.7-10.6,13.7c-0.5,0.5-1.2,1-1.8,1.4c-1.2,0.7-2.1,0.6-3.2-0.4c-1.2-1.1-1.8-2.5-2.4-4c-0.3-0.9-0.6-1.8-0.9-2.8
						c-1.3,1-2.5,2.1-3.8,3c-1.3,1-2.7,1.9-4.1,2.7c-1,0.6-1.9,0.5-2.8-0.2c-1.6-1.1-2.7-2.7-3.4-4.5c-0.2-0.5-0.2-1.1-0.3-1.8
						c-0.4,0.6-0.8,1.2-1.2,1.8c-1.7,2.3-3.4,4.7-5.1,7c-0.3,0.4-0.7,0.7-1,1.1c-1.5,1.4-3.6,0.9-4.3-1.1c-0.5-1.4-0.7-2.9-0.9-4.3
						C41.4,33.5,41.4,32.5,41.2,31.5z"/>
					<path d="M180.3,30.6c-1.9,1.5-3.7,2.9-5.6,4.3c-0.7,0.5-1.5,1-2.3,1.4c-0.9,0.5-1.9,0.5-2.7-0.2c-2-1.5-3.5-3.3-3.8-6
						c-0.7,0.8-1.4,1.6-2.1,2.4c-0.4,0.5-0.9,0.9-1.3,1.3c-1.3,1.2-2.4,1.2-3.8,0.1c-1.6-1.2-2.3-2.9-2.9-4.7c-0.2-0.7-0.3-1.4-0.4-2.2
						c-0.2,0.3-0.3,0.5-0.5,0.8c-2.3,3.7-4.6,7.4-7.5,10.7c-0.3,0.4-0.7,0.8-1.1,1.1c-1.5,1.4-3.6,0.9-4.3-1.1c-0.5-1.4-0.7-2.9-0.9-4.3
						c-0.2-0.9-0.2-1.8-0.3-2.8c-0.2,0.1-0.4,0.3-0.6,0.4c-2.6,1.6-5.1,3.3-7.7,4.7c-3.1,1.7-5.5,0.8-7.1-2.3c-0.1-0.2-0.2-0.3-0.3-0.6
						c-0.8,1-1.5,2-2.2,3c-0.4,0.5-0.8,0.9-1.2,1.4c-0.5,0.6-1.1,0.6-1.7,0.2c-0.7-0.6-1.4-1.2-1.9-1.9c-1.7-2.4-2.6-5.3-3-8.2
						c-0.9-6.3,0.2-12.4,2-18.4c0.7-2.4,1.7-4.6,2.6-6.9c0.6-1.4,1-1.5,2.2-0.4c0.8,0.7,1.5,1.5,2.1,2.4c0.6,0.7,0.6,1.6,0.4,2.5
						c-0.7,4-1.5,7.9-2,11.9c-0.5,4.1-0.6,8.3-0.9,12.5c0,0.1,0,0.2,0.1,0.6c0.5-0.6,1-1,1.4-1.5c2.8-3.8,5.6-7.7,8.5-11.5
						c1.5-1.9,3.1-3.7,4.7-5.5c1.2-1.4,2.6-1.4,4.1-0.6c0.8,0.4,1.5,1,2.2,1.6c0.5,0.5,0.6,1.1,0.1,1.7c-0.5,0.6-1.1,0.9-1.8,0.4
						c-0.1-0.1-0.2-0.1-0.3-0.1c-1.7-0.9-1.9-0.9-2.9,0.8c-2.1,3.3-3.6,7-4.7,10.8c0.2-0.2,0.4-0.4,0.6-0.6c3.8-3.3,7.5-6.7,11.3-9.9
						c0.6-0.6,1.3-1.5,2.3-1.2c1.4,0.4,2.3,1.3,2.9,2.7c0.4,0.8,0.3,1.7,0.1,2.5c-0.8,2.9-1.6,5.9-2.4,8.8c-0.3,1.2-0.5,2.5-0.7,3.8
						c0.1,0,0.2,0.1,0.2,0.1c0.2-0.3,0.4-0.5,0.5-0.8c2.9-4,5.7-8,8.6-12c0.7-0.9,1.2-1.9,1.8-2.9c0.4-0.6,0.7-1.2,1.1-1.8
						c0.9-1.4,1.3-1.5,2.7-0.4c0.4,0.3,0.8,0.7,1.2,1.1c0.8,0.8,1.1,1.7,1,2.9c-0.3,2.3-0.4,4.6-0.6,6.9c0.1,0,0.1,0.1,0.2,0.1
						c0.6-0.7,1.2-1.5,1.7-2.2c1-1.3,2.1-2.5,3.1-3.8c0.6-0.8,1-1.8,1.5-2.7c1-1.5,2.1-2.9,3.2-4.3c0.6-0.8,1.5-0.9,2.5-0.5
						c1.6,0.6,2.9,1.6,4.1,2.8c0.3,0.3,0.8,0.7,0.4,1.3c-0.4,0.5-0.9,0.4-1.5,0.1c-0.8-0.5-1.5-0.9-2.3-1.3c-0.8-0.4-1.1-0.4-1.4,0.5
						c-0.8,2.4-1.5,4.8-2.1,7.2c-0.3,1-0.4,2.1-0.5,3.1c-0.1,0.6,0.2,0.8,0.7,0.4c0.8-0.6,1.5-1.2,2.2-1.9c1.9-2.2,3.8-4.4,5.7-6.7
						c0.3-0.3,0.4-0.9,0.5-1.4c0.9-5,1.8-10,3.5-14.8c0.2-0.6,0.5-1.3,0.8-1.9c0.3-0.7,0.9-0.8,1.6-0.5c1.4,0.7,2.1,2,2.1,3.5
						c0,1.7-0.2,3.4-0.3,5.1c-0.3,4-0.7,8.1-1,12.1c-0.2,2.4-0.2,4.9-0.4,7.3c0,0.3,0,0.6,0,1.1c0.5-0.3,1-0.4,1.2-0.7
						c1.5-1.5,3-3,4.5-4.6c1.4-1.4,2.7-2.9,4-4.4c0.3-0.3,0.6-0.6,0.9-0.8c0.5-0.4,0.9-0.4,1.4-0.1c0.5,0.3,0.6,0.8,0.5,1.4
						c-0.2,0.5-0.4,1-0.6,1.5c-3,5.1-6.5,9.8-10.7,14c-0.6,0.5-1.2,1-1.9,1.4c-1.2,0.7-2.2,0.6-3.2-0.3c-1.2-1.1-1.8-2.5-2.4-4
						C180.8,32.4,180.5,31.5,180.3,30.6z"/>
					<path d="M99.4,19.9c0.2-0.1,0.3-0.2,0.4-0.3c3.3-3.4,6.6-6.8,9.9-10.3c0.3-0.3,0.8-0.7,0.5-1.3c-0.4-0.7-0.8-1.5-1.8-1.4
						c-0.7,0.1-1.4,0.2-2,0.5c-4.1,1.9-8.3,3.8-12.4,5.8c-1.3,0.6-2.5,1.2-3.8,1.9c-0.6,0.3-1.2,0.3-1.8-0.1c-0.7-0.5-1.3-1-1.9-1.6
						c-0.8-0.8-0.8-1.6-0.1-2.4c0.6-0.7,1.3-1.4,2.1-2C94.1,4.8,100,2,106.4,0.2c1.8-0.5,3.5,0.1,4.9,1.1c2.2,1.5,3.6,3.6,4.3,6.2
						c0.3,1.1,0.2,2.2-0.5,3c-1.6,1.8-3.1,3.7-4.9,5.2c-3.6,3-7.3,5.7-11,8.5c-0.3,0.2-0.5,0.6-0.5,0.9c-0.4,3.3-0.8,6.7-1.3,10
						c-0.2,1.7-0.6,1.8-2.2,1c-1.5-0.8-2.7-1.9-3.8-3.2c-1-1.2-0.8-2.5-0.5-3.8c1.1-5.8,3.3-11.2,6.1-16.3c0.3-0.6,0.8-0.8,1.4-0.4
						c0,0,0.1,0.1,0.1,0.1c1.6,0.9,1.7,1.1,1.4,2.9c-0.2,1.2-0.4,2.5-0.6,3.7C99.4,19.5,99.4,19.6,99.4,19.9z"/>
					<path d="M160.9,13.6c-0.2-0.1-0.5-0.1-0.7-0.2c-1.4-0.7-2.4-1.9-3.1-3.3c-0.3-0.7-0.1-1.3,0.4-1.7c0.9-0.9,1.9-1.7,2.9-2.5
						c0.4-0.4,1-0.3,1.4,0.1c0.9,0.9,1.9,1.8,2.7,2.8c0.2,0.3,0.3,0.9,0.1,1.3c-0.7,1.5-1.7,2.6-3.2,3.4
						C161.3,13.5,161.1,13.5,160.9,13.6z"/>
				</g>
			</svg>
		</a>
	)
}

export default Logo
