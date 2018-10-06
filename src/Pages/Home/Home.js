import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
		// console.log(e.target.clientX, e.target.clientY)
	}

	setNetscapeFollow = () => {
		this.setState({ netscapeFollow: true })
	}

	render() {
		const { customClass, mouseX, mouseY, netscapeFollow } = this.state
		return (
			<div className="home" onMouseMove={this.trackMouse}>
				<div className="catBox">
					<img className="cat" src="images/cat-walk.gif" />
					<div className="eyeBox">
						<p className={`eye eyeLeft ${customClass}`}>👁️</p>
						<p className={`eye eyeRight ${customClass}`}>👁️</p>
					</div>
					<img className="catRight cat" src="images/cat-walk.gif" />
				</div>
				<img
					onMouseOver={this.setNetscapeFollow}
					className="netscape"
					src="images/netscape.jpg"
					style={
						netscapeFollow
							? {
									height: 40,
									width: 40,
									position: 'absolute',
									top: mouseY - 20,
									left: mouseX - 20
							  }
							: {}
					}
				/>
			</div>
		)
	}
}

Home.propTypes = {}

export default Home
