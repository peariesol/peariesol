import React, { Component } from 'react'
import CenterColumn from './CenterColumn/CenterColumn'
import Netscape from '../../components/Netscape/Netscape'
import './Home.css'

let timer = null

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			randomNumber: 0,
			eyeBlink: '',
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
			eyeBlink: 'playBlink'
		})
		setTimeout(() => this.setState({ eyeBlink: '' }), 3000)
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
			eyeBlink,
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
					<div className="leftColumn sideColumn">
						<img
							className="cat"
							src="images/cat-compress.gif"
							alt="cat walk"
							onClick={this.setInvertColors}
						/>
					</div>
					<CenterColumn
						eyeBlink={eyeBlink}
						invertColors={invertColors}
						setInvertColors={this.setInvertColors}
					/>
					<div className="rightColumn sideColumn">
						<img
							className="catRight cat"
							src="images/cat-compress.gif"
							alt="cat walk"
						/>
					</div>
				</div>
				<div className="homeBottom">
					<img src="icons/signguestbook-compress.gif" />
					<img src="icons/fire420-compress.gif" />
					<img src="icons/candle_book-compress.gif" />
				</div>
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
