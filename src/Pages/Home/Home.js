import React, { Component } from 'react'
import { random, times } from 'lodash'
import CenterColumn from './CenterColumn/CenterColumn'
import Netscape from 'Components/Netscape/Netscape'
import Alert from 'Components/Alert/Alert'
import './Home.css'

const colors = [
	'#FF2200',
	'#EE8808',
	'#33DDEE',
	'#DDAA55',
	'#9ACD32',
	'#FF4500'
]

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			mouseX: null,
			mouseY: null,
			netscapeFollow: false,
			invertColors: false,
			clickCount: 0,
			catSpin: '',
			secretGlow: false,
			secretClicked: false,
			titleColor: '#FF2200',
			leftTikiHue: 0,
			rightTikiHue: 0,
			catsLeft: [],
			catsRight: []
		}
	}

	componentDidMount() {
		const catsLeft = []
		const catsRight = []
		times(4, index =>
			index < 2
				? catsLeft.push(
						<div onMouseOver={this.handleCatHover} key={`cat${index}`}>
							<img
								className="invisibleCat"
								src="images/cat-compress.gif"
								height="100"
								alt="secret cat"
								onClick={this.handleSmallCatClick}
							/>
						</div>
				  )
				: catsRight.push(
						<div onMouseOver={this.handleCatHover} key={`cat${index}`}>
							<img
								className="invisibleCat imgHorizontalFlip"
								src="images/cat-compress.gif"
								height="100"
								alt="secret cat"
								onClick={this.handleSmallCatClick}
							/>
						</div>
				  )
		)
		this.setState({ catsLeft, catsRight })
	}

	handleSmallCatClick = e => {
		e.target.style.filter = `hue-rotate(${random(
			-360,
			360
		)}deg) saturate(200) ${random(0, 20) === 0 ? 'invert(1)' : ''}`
	}

	handleCatHover = e => {
		const catImg = e.target.firstChild
		if (catImg && catImg.className.includes('invisibleCat')) {
			catImg.className = catImg.className.replace('invisibleCat', 'visibleCat')
		}
	}

	changeTitleColor = () => {
		this.setState({ titleColor: colors[random(0, colors.length - 1)] })
	}

	trackMouse = e => {
		this.setState({
			mouseX: e.clientX,
			mouseY: e.clientY
		})
	}

	setNetscapeFollow = () => {
		this.setState({ netscapeFollow: true })
	}

	setInvertColors = () => {
		this.setState({
			invertColors: !this.state.invertColors,
			clickCount: this.state.clickCount + 1
		})
	}

	catSpin = e => {
		const catClass = e.target.classList
		catClass.add('catSpin')
		setTimeout(() => catClass.remove('catSpin'), 500)
	}

	handleHorseHover = () => {
		this.setState({ secretGlow: true })
	}

	handleHorseUnHover = () => {
		this.setState({ secretGlow: false })
	}

	handleSecret = () => {
		this.setState({ secretClicked: !this.state.secretClicked })
	}

	handleTikiClick = name => () => {
		if (name === 'left') {
			this.setState({
				leftTikiHue: this.state.leftTikiHue - 90
			})
		} else if (name === 'right') {
			this.setState({
				rightTikiHue: this.state.rightTikiHue + 90
			})
		}
	}

	render() {
		const {
			mouseX,
			mouseY,
			netscapeFollow,
			invertColors,
			clickCount,
			catSpin,
			secretGlow,
			secretClicked,
			titleColor,
			leftTikiHue,
			rightTikiHue,
			catsLeft,
			catsRight
		} = this.state

		return (
			<div
				className="home"
				onMouseMove={this.trackMouse}
				style={{
					backgroundImage: `url(${
						!secretClicked
							? 'textures/hauntedhouselightening-compress.gif'
							: 'textures/angel-with-bone-wings.jpg'
					})`
				}}
			>
				<img
					className="bloodDrip"
					src="gifs/blood_drip.gif"
					alt="blood drip"
					style={{ marginTop: -2 }}
				/>
				<div className="homeTop">
					<div className="leftColumn sideColumn">
						<img
							className="cat"
							src="images/cat-compress.gif"
							alt="cat walk"
							onClick={this.catSpin}
						/>
						{catsLeft.map(cat => cat)}
					</div>

					<CenterColumn
						handleHorseHover={this.handleHorseHover}
						handleHorseUnHover={this.handleHorseUnHover}
						setInvertColors={this.setInvertColors}
						changeTitleColor={this.changeTitleColor}
						handleTikiClick={this.handleTikiClick}
						invertColors={invertColors}
						titleColor={titleColor}
						leftTikiHue={leftTikiHue}
						rightTikiHue={rightTikiHue}
						clickCount={clickCount}
					/>
					<div className="rightColumn sideColumn">
						<img
							className={`imgHorizontalFlip cat ${catSpin}`}
							src="images/cat-compress.gif"
							alt="cat walk"
							onClick={this.catSpin}
						/>
						{catsRight.map(cat => cat)}
						<div
							onClick={this.handleSecret}
							className={`secretBox ${secretGlow && 'secretGlow'}`}
						/>
					</div>
				</div>
				<div className="homeBottom">
					<img src="icons/lightening_break-compress.gif" alt="lightening" />
				</div>
				<Alert />
				<img
					className="bloodDrip"
					src="gifs/blood_drip.gif"
					alt="blood drip"
					style={{
						margin: window.innerWidth < 500 ? '3px 0' : 0,
						transform: 'rotate(180deg)'
					}}
				/>
				<Netscape
					setNetscapeFollow={this.setNetscapeFollow}
					netscapeFollow={netscapeFollow}
					mouseX={mouseX}
					mouseY={mouseY}
				/>
			</div>
		)
	}
}

export default Home
