import React from 'react'
import moment from 'moment'
import Shows from './Components/Shows'
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

const ShowsPage = () => (
	<div className="showsPage">
		<div
			style={{
				backgroundImage: 'url("textures/heaven2.png")',
				backgroundSize: 400
			}}
		>
			<h3 className="showType">Upcoming Shows</h3>
			<Shows shows={upcomingShows} upcoming={true} />
		</div>
		<div
			style={{
				backgroundImage: 'url("textures/graveyard.jpg")',
				backgroundSize: 550
			}}
		>
			<h3 className="showType">Previous Shows</h3>
			<Shows shows={previousShows} upcoming={false} />
		</div>
	</div>
)

export default ShowsPage
