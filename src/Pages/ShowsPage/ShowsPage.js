import React from 'react'
import moment from 'moment'
import Shows from './components/Shows'
import showList from '../../Utils/ShowList'
import './ShowsPage.css'

const previousShows = []
const upcomingShows = []

showList.forEach(show => {
	if (moment(show.date).diff(moment()) < 0) {
		previousShows.push(show)
	} else {
		upcomingShows.push(show)
	}
})

const ShowsPage = () => {
	return (
		<div className="showsPage">
			<div
				style={{
					backgroundImage: 'url("textures/heaven2.png")',
					backgroundSize: 400
				}}
			>
				<Shows shows={upcomingShows} upcoming={true} title="Upcoming Shows" />
			</div>
			<div
				style={{
					backgroundImage: 'url("textures/graveyard.jpg")',
					backgroundSize: 550
				}}
			>
				<Shows shows={previousShows} upcoming={false} title="Previous Shows" />
			</div>
		</div>
	)
}

export default ShowsPage
