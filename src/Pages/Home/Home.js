import React, { Component } from 'react'
import MainImageTitle from '../../components/MainImageTitle/MainImageTitle'
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
			netscapeFollow: false,
			invertColors: false
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
			this.setState({ randomNumber: newNumber })
			newNumber === 6 && this.animateBlink()
			this.randomize()
		}, 4000)
	}

	animateBlink() {
		this.setState({
			customClass: 'playBlink'
		})
		setTimeout(() => this.setState({ customClass: '' }), 3000)
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

	render() {
		const {
			customClass,
			mouseX,
			mouseY,
			netscapeFollow,
			invertColors
		} = this.state

		return (
			<div
				className="home"
				onMouseMove={this.trackMouse}
				style={{
					backgroundImage: "url('textures/hauntedhouselightening-compress.gif')"
				}}
			>
				<div className="homeTop">
					<img
						className="cat"
						src="images/cat-compress.gif"
						alt="cat walk"
						onClick={this.setInvertColors}
					/>
					<div>
						<div className="eyeBox">
							<img src="icons/devilfire-compress.gif" className="devilFire" />
							<span
								className={`eye ${customClass}`}
								aria-label="all knowing eye"
								role="img"
							>
								👁️
							</span>
							<img src="icons/devilfire-compress.gif" className="devilFire" />
						</div>
						<MainImageTitle
							invertColors={invertColors}
							setInvertColors={this.setInvertColors}
						/>
					</div>
					<img
						className="catRight cat"
						src="images/cat-compress.gif"
						alt="cat walk"
					/>
				</div>
				<div className="homeBottom">
					<img src="icons/signguestbook-compress.gif" />
					<img src="icons/fire420-compress.gif" />
					<img src="icons/candle_book-compress.gif" />
				</div>
				<img
					onMouseOver={this.setNetscapeFollow}
					className="netscape"
					src="images/netscape-compress.jpg"
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
							: { position: 'fixed', top: 400, left: 20 }
					}
				/>
			</div>
		)
	}
}

export default Home
