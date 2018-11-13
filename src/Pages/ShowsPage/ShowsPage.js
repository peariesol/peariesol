import React from 'react'
import moment from 'moment'
import { reverse } from 'lodash'
import Shows from './Components/Shows'
import showList from '../../Utils/ShowList'
import './ShowsPage.css'

const previousShows = []
let upcomingShows = []

showList.forEach(show => {
	if (moment(show.date).diff(moment()) < 0) {
		previousShows.push(show)
	} else {
		upcomingShows.push(show)
	}
})

upcomingShows = reverse(upcomingShows)

const ShowsPage = () => (
	<div className="showsPage">
		<div
			style={{
				backgroundImage: 'url("textures/heaven2.png")',
				backgroundSize: 400,
				textAlign: 'center'
			}}
		>
			<h3 className="showType upcomingHeading">
				<span aria-label="sun" role="img">
					☀️
				</span>
				{' Upcoming Shows '}
				<span aria-label="sun" role="img">
					☀️
				</span>
			</h3>
			<Shows shows={upcomingShows} upcoming={true} />
		</div>
		<div
			style={{
				backgroundImage: 'url("textures/graveyard.jpg")',
				backgroundSize: 550,
				textAlign: 'center'
			}}
		>
			<h3 className="showType previousHeading">
				<span role="img" aria-label="moon">
					🌙
				</span>
				{' Previous Shows '}
				<span role="img" aria-label="moon">
					🌙
				</span>
			</h3>
			<Shows shows={previousShows} upcoming={false} />
		</div>
	</div>
)

export default ShowsPage
