import React, { Component } from 'react'
import moment from 'moment'
import { reverse } from 'lodash'
import { join, map, get } from 'lodash'
import showList from 'Utils/ShowList'
import './Alert.css'

let upcomingShows = []

showList.forEach(show => {
	if (moment(show.date).diff(moment(0, 'HH')) >= 0) {
		upcomingShows.push(show)
	}
})

upcomingShows = reverse(upcomingShows)

class Alert extends Component {
	constructor(props) {
		super(props)
		this.state = {
			width: null
		}
	}

	componentDidMount() {
		const paragraphStats = document.querySelector('.alertTicker')
		this.setState({
			width: get(paragraphStats, 'scrollWidth', null)
		})
	}

	render() {
		const { width } = this.state
		const showInfo = join(
			map(upcomingShows, ({ location, date }) => `${location} ${date}`),
			' / '
		)

		return upcomingShows.length > 0 ? (
			<div style={{ position: 'inline' }}>
				<p className="alertTicker" style={{ width: width ? width : '100%' }}>
					<strong>Breaking News! Upcoming shows in... </strong>
					{` ${showInfo}`}
				</p>
			</div>
		) : null
	}
}

Alert.propTypes = {}

export default Alert
