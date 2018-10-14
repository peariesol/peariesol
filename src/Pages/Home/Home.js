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
				style={{
					position: 'relative',
					height: '100vh',
					backgroundImage: "url('textures/hauntedhouselightening.gif')",
					backgroundSize: '300px',
					backgroundRepeat: 'repeat'
				}}
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
						<div className="mainImageBox">
							<img className="mainImage" src="self_photos/tape_art1.jpg" />
							<img src="icons/firetiki.gif" />
						</div>
						<img src="icons/lightening_break.gif" />
						<div className="mainTitleBox">
							<img
								src="icons/horsewalk.gif"
								style={{ width: 20, height: 70 }}
							/>
							<p
								className={`mainImageTitle font-effect-distressed font-effect-3d font-effect-fire-animation`}
							>
								Pearie Sol
							</p>
							<img src="icons/horsewalk.gif" />
						</div>
					</main>
					<img
						className="catRight cat"
						src="images/cat-walk.gif"
						alt="cat walk"
					/>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						height: 40
					}}
				>
					<img src="icons/signguestbook.gif" />
					<img src="icons/fire420.gif" />
					<img src="icons/candle_book.gif" />
					<img src="icons/devilfire.gif" />
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
							: { position: 'fixed', top: 400, left: 20 }
					}
				/>
			</div>
		)
	}
}

export default Home
