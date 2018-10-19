import React from 'react'
import PropTypes from 'prop-types'
import './Shows.css'

const Shows = ({ shows, upcoming }) => {
	const showDisplay =
		shows.length >= 1 ? (
			shows.map(({ date, venue, location, otherActs }) => (
				<ol>
					<li>
						<ul>
							<li>
								<span className="showListItem">
									<strong>Date: </strong>
									{date}
								</span>
							</li>
							<li>
								<span className="showListItem">
									<strong>Location: </strong>
									{location}
								</span>
							</li>
							<li>
								<span className="showListItem">
									<strong>Venue: </strong>
									{venue}
								</span>
							</li>
							<li>
								<span className="showListItem">
									<strong>Other Acts: </strong>
									{otherActs}
								</span>
							</li>
						</ul>
					</li>
					<br />
				</ol>
			))
		) : (
			<p>🕯️ No upcoming shows 🕯️</p>
		)
	return (
		<div
			className="showList"
			style={{
				backgroundImage: upcoming
					? 'url("textures/heaven2.png")'
					: 'url("textures/graveyard.jpg")',
				backgroundSize: '600px',
				color: 'yellow',
				fontSize: 20,
				textAlign: 'center'
			}}
		>
			{showDisplay}
		</div>
	)
}

Shows.propTypes = {
	shows: PropTypes.arrayOf({
		date: PropTypes.string.isRequired,
		venue: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		otherActs: PropTypes.string.isRequired
	}).isRequired,
	upcoming: PropTypes.bool.isRequired
}

export default Shows
