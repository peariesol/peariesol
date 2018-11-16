import React, { Component } from 'react'
import { random } from 'lodash'
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
			catSpin: '',
			secretGlow: false,
			secretClicked: false,
			titleColor: '#FF2200',
			leftTikiHue: 0,
			rightTikiHue: 0
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
		this.setState({ invertColors: !this.state.invertColors })
	}

	catSpin = () => {
		this.setState({ catSpin: 'catSpin' })
		setTimeout(() => this.setState({ catSpin: '' }), 600)
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
		console.log(name)
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
			catSpin,
			secretGlow,
			secretClicked,
			titleColor,
			leftTikiHue,
			rightTikiHue
		} = this.state

		console.log(leftTikiHue)

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
					<img
						className="cat"
						src="images/cat-compress.gif"
						alt="cat walk"
						onClick={this.setInvertColors}
					/>

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
					/>
					<div>
						<img
							className={`imgHorizontalFlip cat ${catSpin}`}
							src="images/cat-compress.gif"
							alt="cat walk"
							onClick={this.catSpin}
						/>
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
