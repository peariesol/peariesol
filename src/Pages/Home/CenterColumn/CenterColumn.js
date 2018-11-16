import React from 'react'
import PropTypes from 'prop-types'
import EyeBox from '../EyeBox/EyeBox'
import './CenterColumn.css'

const CenterColumn = ({
	invertColors,
	setInvertColors,
	handleHorseHover,
	handleHorseUnHover,
	changeTitleColor,
	titleColor,
	handleTikiClick,
	leftTikiHue,
	rightTikiHue
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
			<p
				style={{ color: titleColor }}
				onClick={changeTitleColor}
				className={`mainImageTitle font-effect-fire-animation`}
			>
				Pearie Sol
			</p>
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
				onClick={handleTikiClick('left')}
				className="centerImages tikiImage"
				src="icons/firetiki-compress.gif"
				alt="tiki fire"
				style={{ filter: `hue-rotate(${leftTikiHue}deg)` }}
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
				onClick={handleTikiClick('right')}
				className="centerImages tikiImage"
				src="icons/firetiki-compress.gif"
				alt="tiki fire"
				style={{ filter: `hue-rotate(${rightTikiHue}deg)` }}
			/>
		</div>
	</div>
)

CenterColumn.propTypes = {
	invertColors: PropTypes.bool.isRequired,
	titleColor: PropTypes.string.isRequired,
	rightTikiHue: PropTypes.number.isRequired,
	leftTikiHue: PropTypes.number.isRequired,
	setInvertColors: PropTypes.func.isRequired,
	handleHorseHover: PropTypes.func.isRequired,
	handleHorseUnHover: PropTypes.func.isRequired,
	changeTitleColor: PropTypes.func.isRequired,
	handleTikiClick: PropTypes.func.isRequired
}

export default CenterColumn
