import React from 'react'
import PropTypes from 'prop-types'
import './Shows.css'

const Shows = ({ shows, upcoming, title }) => {
	const showDisplay =
		shows.length >= 1 ? (
			shows.map(({ date, venue, location, otherActs }) => (
				<ol>
					<li>
						<ul>
							<li>
								<span className="showListItemRow">
									<strong>Date: </strong>
									{date}
								</span>
							</li>
							<li>
								<span className="showListItemRow">
									<strong>Location: </strong>
									{location}
								</span>
							</li>
							<li>
								<span className="showListItemRow">
									<strong>Venue: </strong>
									{venue}
								</span>
							</li>
							<li>
								<span className="showListItemRow">
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
			<span>
				<span role="img" aria-label="candle">
					🕯
				</span>
				{'  No upcoming shows  '}
				<span role="img" aria-label="candle">
					🕯
				</span>
				️
			</span>
		)
	return (
		<div className="showList">
			<h3 className="showType">{title}</h3>
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
	upcoming: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired
}

export default Shows
