import React, { Component } from 'react'
import './Home.css'

let timer = null

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			randomNumber: 0,
			customClass: '',
			mouseX: null,
			mouseY: null,
			netscapeFollow: false
		}
	}

	componentDidMount() {
		this.randomize()
	}

	componentWillUnMount() {
		clearInterval(timer)
	}

	randomize() {
		timer = setTimeout(() => {
			const newNumber = Math.ceil(Math.random() * 8)
			this.setState({
				randomNumber: newNumber
			})
			newNumber === 6 && this.animateBlink()
			this.randomize()
		}, 4000)
	}

	animateBlink() {
		this.setState({
			customClass: 'playBlink'
		})
		setTimeout(() => {
			this.setState({
				customClass: ''
			})
		}, 3000)
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

	render() {
		const { customClass, mouseX, mouseY, netscapeFollow } = this.state
		return (
			<div
				className="home"
				onMouseMove={this.trackMouse}
				style={{ position: 'relative' }}
			>
				<div className="catBox">
					<img className="cat" src="images/cat-walk.gif" alt="cat walk" />
					<main>
						<div className="eyeBox">
							<span
								className={`eye eyeLeft ${customClass}`}
								aria-label="left eye"
								role="img"
							>
								👁️
							</span>
							<span
								className={`eye eyeRight ${customClass}`}
								aria-label="right eye"
								role="img"
							>
								👁️
							</span>
						</div>
						<div
							style={{
								border: '2px purple solid',
								padding: 30,
								margin: 15,
								position: 'relative'
							}}
						>
							<p
								style={{ fontSize: 64, color: 'green' }}
								className={`font-effect-distressed font-effect-3d`}
							>
								Kick it
							</p>
						</div>
					</main>
					<img
						className="catRight cat"
						src="images/cat-walk.gif"
						alt="cat walk"
					/>
				</div>
				<img
					onMouseOver={this.setNetscapeFollow}
					className="netscape"
					src="images/netscape.jpg"
					alt="netscape logo"
					style={
						netscapeFollow
							? {
									height: 40,
									width: 40,
									position: 'absolute',
									top: mouseY >= 100 ? mouseY - 120 : 100,
									left: mouseX - 20
							  }
							: {}
					}
				/>
			</div>
		)
	}
}

export default Home
