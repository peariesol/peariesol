import React, { Component } from 'react'
import ShowList from '../../Utils/ShowList'

class Shows extends Component {
	render() {
		console.log(ShowList)
		return (
			<div className="showPage">
				<h2>Shows</h2>
				<div className="upcomingShows">
					<ol>
						{ShowList.map(({ date, venue, location, otherActs }) => (
							<li>
								<div className="upcomingShow">
									<ul>
										<li>
											<strong>Date: </strong>
											{date}
										</li>
										<li>
											<strong>Location: </strong>
											{location}
										</li>
										<li>
											<strong>Venue: </strong>
											{venue}
										</li>
										<li>
											<strong>Other Acts: </strong>
											{otherActs}
										</li>
									</ul>
								</div>
							</li>
						))}
					</ol>
				</div>
				<div className="previousShows">
					<p>Coming soon</p>
				</div>
			</div>
		)
	}
}

export default Shows
