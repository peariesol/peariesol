import React from 'react'
import PropTypes from 'prop-types'
import './CenterColumn.css'

const CenterColumn = ({ invertColors, setInvertColors, eyeBlink }) => (
	<div className="centerColumn">
		<div className="eyeBox">
			<img src="icons/devilfire-compress.gif" className="devilFire" />
			<span
				className={`eye ${eyeBlink}`}
				aria-label="all knowing eye, hi ahmad"
				role="img"
			>
				👁️
			</span>
			<img src="icons/devilfire-compress.gif" className="devilFire" />
		</div>
		<div className="mainImageBox">
			<img src="icons/firetiki-compress.gif" />
			<img
				onClick={setInvertColors}
				className={`mainImage ${invertColors && 'invertColors'}`}
				src="self_photos/tape_art1-compress.jpg"
			/>
			<img src="icons/firetiki-compress.gif" />
		</div>
		<img src="icons/lightening_break-compress.gif" />
		<div className="mainTitleBox">
			<img
				src="icons/horsewalk-compress.gif"
				style={{ width: 20, height: 70 }}
			/>
			<p className={`mainImageTitle font-effect-fire-animation`}>Pearie Sol</p>
			<img src="icons/horsewalk-compress.gif" />
		</div>
	</div>
)

CenterColumn.propTypes = {
	invertColors: PropTypes.bool.isRequired,
	setInvertColors: PropTypes.func.isRequired,
	eyeBlink: PropTypes.string.isRequired
}

export default CenterColumn
