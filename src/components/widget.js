import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'
import { Loader } from './common/loader'
import { requestPublic } from './helpers/request'
import { getCurrentDate, delay } from './helpers'
import SearchSummary from './show/search-summary'
import ShowItem from './show/showitem'
import Logo from './show/logo'
import './scss/index.scss'

const getSize = (width) => {
	if (width > 600) {
		return 'large'
	}

	return 'small'
}

class Widget extends Component {
	state = {
		sort: 'all',
		shows: [],
		page: 0,
		isEnd: false,
		elementSize: 'large'
	}

	componentWillUnmount() {
		if (!this.parentEl) {
			return
		}

		this.parentEl.removeEventListener('resize', this.setMetrics, false)
	}

	componentDidMount() {
		if (!this.parentEl) {
			return
		}

		this.parentEl.addEventListener('resize', this.setMetrics, false)
		this.setMetrics()
	}

	setMetrics = () => {
		if (!this.parentEl) {
			return
		}

		const width = this.parentEl.offsetWidth
		const elementSize = width > 600 ? 'large' : width > 350 ? 'small' : 'small tiny'

		if (this.prevElementSize !== elementSize) {
			this.setState({ elementSize })
		}

		this.prevElementSize = elementSize

		delay(this.setMetrics, 300)
	}

	onLoadMore = () => {
		const { query, venue, location, cost, tag, genre } = this.props
		const { sort, page, afterPage, after } = this.state

		let { shows } = this.state
		let path = `/search/shows?query=${query}&location=${location}&venue=${venue}&cost=${cost}&tag=${tag}&genre=${genre}&sort=${sort}&page=${afterPage || page}`

		if (after) {
			path += `&after=${after}`
		}
		else {
			path += `&from=${getCurrentDate()}`
		}

		requestPublic({ path })
			.end((err, reply) => {
				if (err) {
					return console.error('err ', err)
				}

				const { body } = reply

				shows = shows.concat(body.shows || [])

				this.setState({ ...body, shows })
				this.setMetrics()
			})
	}

	render() {
		const canTouch = ('ontouchstart' in window)
		const { shows, summary, elementSize, isEnd } = this.state
		const { theme, logoColor, maxHeight, title } = this.props
		const style = maxHeight ? { maxHeight } : {}

		return (
			<div className={`rp-parent ${elementSize} ${canTouch ? 'touch' : 'no-touch'} theme-${theme}`} ref={node => this.parentEl = node}>
				{summary && (
					<SearchSummary
						summary={summary}
						title={title} />
				)}

				<div className="list-scroll" style={style}>
					<InfiniteScroll
						pageStart={0}
						threshold={typeof window === 'undefined' ? 980 : window.innerHeight}
						loadMore={this.onLoadMore}
						hasMore={!isEnd}
						useWindow={!(maxHeight)}
						className="showlist list relative"
						loader={
							<li
								key={Math.round(Math.random() * 1000)}
								className="showlist-endcap">
								<Loader size="small" />
							</li>
						}>

						{shows.map((show, index) => (
							<ShowItem
								key={`${index}:${show.id}`}
								elementSize={elementSize}
								{...this.props}
								{...show} />
						))}

					</InfiniteScroll>
				</div>

				<Logo
					logoColor={logoColor}
					theme={theme} />
			</div>
		)
	}
}

Widget.propTypes = {
	parentElement: PropTypes.string,

	// Query
	query: PropTypes.string,
	venue: PropTypes.string,
	location: PropTypes.string,
	cost: PropTypes.string,
	tag: PropTypes.string,
	genre: PropTypes.string,

	// Style
	primaryColor: PropTypes.string,
	accentColor: PropTypes.string,
	keylineColor: PropTypes.string,
	buttonColor: PropTypes.string,
	logoType: PropTypes.string,
}

// Theme: Light
Widget.defaultProps = {
	parentElement: '#rp-root',
	theme: 'color',
	title: '',
	maxHeight: '',

	// Query
	query: '',
	venue: '',
	location: 'Portland, ME',
	cost: '',
	tag: '',
	genre: '',

	// Style
	primaryColor: '#3f5765',
	accentColor: '#8b61a9',
	keylineColor: '#d3e1e7',
	buttonTextColor: '',
	buttonBackground: '',
	logoColor: '',
}

// Theme: Dark
// Widget.defaultProps = {
// 	parentElement: '#rp-root',
// 	theme: 'dark',

// 	// Query
// 	query: '',
// 	venue: '',
// 	location: 'Portland, ME',
// 	cost: '',
// 	tag: '',
// 	genre: '',

// 	// Style
// 	primaryColor: '#3f5765',
// 	accentColor: '#8b61a9',
// 	keylineColor: '#d3e1e7',
// 	buttonTextColor: '',
// 	buttonBackground: '',
// }

export default Widget
