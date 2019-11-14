import uniqBy from 'lodash/uniqBy'
import isArray from 'lodash/isArray'
import isEqual from 'lodash/isEqual'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'
import { Loader } from './common/loader'
import { requestPublic, requestSimple } from './helpers/request'
import { isMobile } from './helpers/device-detect'
import { getCurrentDate, delay, events } from './helpers'
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

const setFeaturedShow = (featuredShows, shows, currentSlugs = [], offsetIndex = 0) => {
	if (!featuredShows.length) {
		return shows
	}

	featuredShows = featuredShows.filter(s => (currentSlugs.indexOf(s.slug) < 0))

	if (featuredShows.length > 0) {
		let showIndex = 0
		let randomIndex = Math.floor(Math.random() * featuredShows.length)

		for (let i = 0; i < shows.length; i++) {
			if (showIndex === (1 + offsetIndex)) {
				featuredShows[randomIndex].type = 'sponsored'
				shows = shows.filter(s => s.slug !== featuredShows[randomIndex].slug)
				shows.splice(i, 0, featuredShows[randomIndex])

				break
			}

			if (shows[i].type === 'show') {
				showIndex++
			}
		}
	}

	return shows
}

class Widget extends Component {
	state = {
		sort: 'all',
		shows: [],
		featuredShows: [],
		page: 0,
		connection: true,
		isLoading: false,
		isEnd: false,
		elementSize: 'large'
	}

	constructor(props) {
		super(props)

		this.isLoading = false
	}

	componentDidMount() {
		if (!this.parentEl) {
			return
		}

		this.setEventListeners()
		this.setMetrics()
		this.onLoadMore()
	}

	componentWillUnmount() {
		if (!this.parentEl) {
			return
		}

		this.setEventListeners('remove')
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

	setConnection = (connection) => {
		this.setState({ connection })

		if (!connection) {
			return setTimeout(() => {
				const callback = (err, reply) => {
					let isConnected = !!(reply && reply.status === 200)

					this.setConnection(isConnected)

					if (isConnected) {
						return this.onLoadMore()
					}
				}

				requestSimple('/check-connection')
					.end(callback)
			}, 5000)
		}
	}

	onLoadMore = () => {
		const { query, venue, location, cost, tag, genre } = this.props
		const { sort, page, afterPage, after, isLoading } = this.state

		let offsetIndex = 0
		let { shows, featuredShows } = this.state
		let currentSlugs = []
		let path = `/search/shows?query=${query}&location=${location}&venue=${venue}&cost=${cost}&tag=${tag}&genre=${genre}&sort=${sort}&page=${afterPage || page}`

		if (after) {
			path += `&after=${after}`
		}
		else {
			path += `&from=${getCurrentDate()}`
		}

		if (this.isLoading) {
			return
		}

		this.isLoading = true

		requestPublic({ path })
			.end((err, reply) => {
				this.isLoading = false

				if (err) {
					this.setConnection(false)
					return
				}

				const { body } = reply

				featuredShows = (isArray(body.featuredShows) && body.featuredShows.length > 0) ? body.featuredShows : featuredShows
				offsetIndex = Math.max(shows.length - 1, 0)
				shows = uniqBy(shows.concat(body.shows || []), 'slug')
				currentSlugs = shows.map(s => s.slug)
				shows = setFeaturedShow(featuredShows, shows, currentSlugs, offsetIndex)

				this.setState({
					...body,
					featuredShows,
					shows
				})

				this.setMetrics()
			})
	}

	setEventListeners = (state = 'add') => {
		if (!this.scrollEl) {
			return
		}

		this.scrollEl[`${state}EventListener`]('scroll', () => {
			if (isMobile) {
				return
			}

			events.publish('scroll', {
				top: this.scrollEl.scrollTop,
				type: 'scroll'
			})
		})

		this.scrollEl[`${state}EventListener`]('touchmove', () => {
			events.publish('scroll', {
				top: this.scrollEl.scrollTop,
				type: 'touchmove'
			})
		})

		this.parentEl[`${state}EventListener`]('resize', this.setMetrics, false)
	}

	render() {
		const canTouch = ('ontouchstart' in window)
		const { shows, summary, elementSize, isLoading, isEnd, connection } = this.state
		const { theme, logoColor, maxHeight, title } = this.props
		const style = maxHeight ? { maxHeight } : {}

		return (
			<div className={`rp-parent ${elementSize} ${canTouch ? 'touch' : 'no-touch'} theme-${theme}`} ref={node => this.parentEl = node}>
				{summary && (
					<SearchSummary
						summary={summary}
						title={title} />
				)}

				<div className="list-scroll" style={style} ref={node => this.scrollEl = node}>
					<InfiniteScroll
						initialLoad={true}
						pageStart={0}
						threshold={typeof window === 'undefined' ? 980 : window.innerHeight}
						loadMore={this.onLoadMore}
						hasMore={(!isEnd && !this.isLoading && connection)}
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
								index={index}
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
