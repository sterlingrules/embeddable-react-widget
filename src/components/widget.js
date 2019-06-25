import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'
import { Loader } from './common/loader'
import { requestPublic } from './helpers/request'
import { getCurrentDate } from './helpers'
import ShowItem from './show/showitem'
import './scss/index.scss'

class Widget extends Component {
	state = {
		shows: [],
		isEnd: false
	}

	componentWillMount() {
		requestPublic({ path: `/shows?sort=all&page=1&from=${getCurrentDate()}` })
			.end((err, reply) => {
				if (err) {
					return console.error('err ', err)
				}

				const { body } = reply

				this.setState({ ...body })
			})
	}

	onLoadMore = () => {
		// asdf
	}

	render() {
		const { shows, isEnd } = this.state
		const style = {
			display: 'block',
			margin: 'auto',
			marginRight: 0,
			height: 36,
			width: 216,
			backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABkCAYAAABaQU4jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkJCNTY4RUY4RUFDMTFFOTkwNjE5RjREQ0NFMkVDQTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkJCNTY4RjA4RUFDMTFFOTkwNjE5RjREQ0NFMkVDQTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQkI1NjhFRDhFQUMxMUU5OTA2MTlGNERDQ0UyRUNBOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQkI1NjhFRThFQUMxMUU5OTA2MTlGNERDQ0UyRUNBOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqDcqFkAABTxSURBVHja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')`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
		}

		console.log('shows ', shows)

		return (
			<div ref={node => this.parentEl = node}>
				<InfiniteScroll
					pageStart={0}
					threshold={typeof window === 'undefined' ? 980 : window.innerHeight}
					loadMore={this.onLoadMore}
					hasMore={!isEnd}
					className="showlist list relative"
					loader={
						<li
							key={Math.round(Math.random() * 1000)}
							className="showlist-endcap">
							<Loader size="small" />
						</li>
					}>

					{shows.map(show => (
						<ShowItem key={show.id} {...show} />
					))}

				</InfiniteScroll>

				<div style={style} />
			</div>
		)
	}
}

// class Widget extends Component {
// 	state = {
// 		opened: false,
// 		showDock: true
// 	}

// 	handleToggleOpen = () => {
// 		this.setState((prev) => {
// 			let { showDock } = prev

// 			if (!prev.opened) {
// 				showDock = false
// 			}

// 			return {
// 				showDock,
// 				opened: !prev.opened,
// 			};
// 		});
// 	}

// 	handleWidgetExit = () => {
// 		this.setState({
// 			showDock: true,
// 		});
// 	}

// 	renderBody = () => {
// 		const { showDock } = this.state;

// 		if (!showDock) return '';

// 		return (
// 			<button
// 				type="button"
// 				className="dock"
// 				onClick={this.handleToggleOpen}
// 				onKeyPress={this.handleToggleOpen}>
// 				^ OPEN ^
// 			</button>
// 		);
// 	}

// 	render() {
// 		const { opened } = this.state;
// 		const body = this.renderBody();
// 		const { bodyText, headerText, footerText } = this.props;

// 		return (
// 			<div className="docked-widget">
// 				<Transition in={opened} timeout={250} onExited={this.handleWidgetExit}>
// 					{status => (
// 						<div className={`widget widget-${status}`}>
// 							<div className="widget-header">
// 								<div className="widget-header-title">
// 									{headerText}
// 								</div>
// 								<button
// 									type="button"
// 									className="widget-header-icon"
// 									onClick={this.handleToggleOpen}
// 									onKeyPress={this.handleToggleOpen}
// 								>
// 									X
// 								</button>
// 							</div>
// 							<div className="widget-body">
// 								{bodyText}
// 							</div>
// 							<div className="widget-footer">
// 								{footerText}
// 							</div>
// 						</div>
// 					)}
// 				</Transition>
// 				{body}
// 			</div>
// 		);
// 	}
// }

Widget.propTypes = {
	headerText: PropTypes.string,
	bodyText: PropTypes.string,
	footerText: PropTypes.string
}

Widget.defaultProps = {
	headerText: 'Header',
	bodyText: 'Body',
	footerText: 'Footer'
}

export default Widget
