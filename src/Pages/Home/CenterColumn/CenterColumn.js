import React from 'react'
import PropTypes from 'prop-types'
import EyeBox from '../EyeBox/EyeBox'
import './CenterColumn.css'

const CenterColumn = ({
	invertColors,
	setInvertColors,
	handleHorseHover,
	handleHorseUnHover
}) => (
	<div className="centerColumn">
		<EyeBox />
		<div className="mainTitleBox">
			<img
				className="imgHorizontalFlip"
				src="icons/horsewalk-compress-transparent.gif"
				alt="horse"
				height="60"
				onMouseOver={handleHorseHover}
				onMouseOut={handleHorseUnHover}
			/>
			<p className={`mainImageTitle font-effect-fire-animation`}>Pearie Sol</p>
			<img
				src="icons/horsewalk-compress-transparent.gif"
				alt="horse"
				height="60"
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
	handleHorseHover: PropTypes.func.isRequired,
	handleHorseUnHover: PropTypes.func.isRequired
}

export default CenterColumn
