import React from 'react'
import PropTypes from 'prop-types'
import './Shows.css'

const expFont = (num, x) => Math.pow(num, x)

const maxFont = 20

const Shows = ({ shows }) => {
	const x = Math.log(maxFont) / Math.log(shows.length)
	let count = shows.length
	const showDisplay =
		shows.length >= 1 ? (
			shows.map(({ date, venue, location, otherActs }, index) => {
				index !== 0 && (count = count - 1)
				return (
					<ol key={index}>
						<li style={{ fontSize: expFont(count + 1, x) }}>
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
				)
			})
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
	return <div className="showList">{showDisplay}</div>
}

Shows.propTypes = {
	shows: PropTypes.arrayOf(
		PropTypes.shape({
			date: PropTypes.string.isRequired,
			venue: PropTypes.string.isRequired,
			location: PropTypes.string.isRequired,
			otherActs: PropTypes.string.isRequired
		})
	).isRequired
}

export default Shows
