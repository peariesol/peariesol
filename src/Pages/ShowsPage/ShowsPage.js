import React from 'react'
import moment from 'moment'
import Shows from './components/Shows'
import showList from '../../Utils/ShowList'

const previousShows = []
const upcomingShows = []

showList.map(show => {
	if (moment(show.date).diff(moment()) < 0) {
		previousShows.push(show)
	} else {
		upcomingShows.push(show)
	}
})

console.log(previousShows)
console.log(upcomingShows)

const ShowsPage = () => {
	return (
		<div className="showsPage">
			<div className="upcomingShows">
				<h3 className="showType">Upcoming Shows</h3>
				<Shows shows={upcomingShows} upcoming={true} />
			</div>
			<div className="previousShows">
				<h3 className="showType">Past Shows</h3>
				<Shows shows={previousShows} upcoming={false} />
			</div>
		</div>
	)
}

export default ShowsPage
