import React from 'react'
import PropTypes from 'prop-types'
import './CenterColumn.css'

const CenterColumn = ({ invertColors, setInvertColors, eyeBlink }) => (
	<div className="centerColumn">
		<div className="eyeBox">
			<img
				src="icons/devilfire-compress.gif"
				className="devilFire"
				alt="devil fire"
			/>
			<span
				className={`eye ${eyeBlink}`}
				aria-label="all knowing eye, hi ahmad"
				role="img"
			>
				👁️
			</span>
			<img
				src="icons/devilfire-compress.gif"
				className="devilFire"
				alt="devil fire"
			/>
		</div>
		<div className="mainTitleBox">
			<img
				src="icons/horsewalk-compress-transparent.gif"
				alt="horse"
				height="80"
			/>
			<p className={`mainImageTitle font-effect-fire-animation`}>Pearie Sol</p>
			<img
				src="icons/horsewalk-compress-transparent.gif"
				alt="horse"
				height="80"
			/>
		</div>
		<div className="mainImageBox">
			<div
				className="mainImageBoxBackground"
				style={{ backgroundImage: 'url("textures/bricks.jpg")' }}
			/>
			<img
				className="centerImages tikiImage"
				src="icons/firetiki-compress.gif"
				alt="tiki fire"
			/>
			<img
				onClick={setInvertColors}
				className={`centerImages mainImage ${
					invertColors ? 'invertColors' : ''
				}`}
				src="photos/tape_art1-compress.jpg"
				alt="self"
			/>
			<img
				className="centerImages tikiImage"
				src="icons/firetiki-compress.gif"
				alt="tiki fire"
			/>
		</div>
	</div>
)

CenterColumn.propTypes = {
	invertColors: PropTypes.bool.isRequired,
	setInvertColors: PropTypes.func.isRequired,
	eyeBlink: PropTypes.string.isRequired
}

export default CenterColumn
