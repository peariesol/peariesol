import React, { Component } from 'react'
import { uniqueId } from 'lodash'
import './EyeBox.css'

let timer = null

class EyeBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			randomNumber: 0,
			eyeBlink: '',
			theEyes: [],
			eyeClickCount: 6
		}
	}

	componentDidMount() {
		this.randomize()
		this.addMoreEyes()
	}

	componentWillUnMount() {
		clearInterval(timer)
	}

	randomize() {
		timer = setInterval(() => {
			const newNumber = Math.ceil(Math.random() * 5)
			this.setState({ randomNumber: newNumber })
			newNumber === 5 && this.animateBlink()
		}, 4000)
	}

	animateBlink() {
		this.setState({ eyeBlink: 'playBlink' })
		setTimeout(() => this.setState({ eyeBlink: '' }), 3000)
	}

	addMoreEyes = () => {
		if (this.state.theEyes.length >= 3) {
			return
		} else if (this.state.eyeClickCount < 2) {
			this.setState({ eyeClickCount: this.state.eyeClickCount + 1 })
		} else {
			this.setState({
				eyeClickCount: 0,
				theEyes: [...this.state.theEyes, { key: uniqueId() }]
			})
		}
	}

	render() {
		const eyeDisplay = this.state.theEyes.map(eye => (
			<span
				key={eye.key}
				className={`eye ${this.state.eyeBlink}`}
				aria-label="all knowing eye, hi ahmad"
				role="img"
				onClick={this.addMoreEyes}
			>
				👁️
			</span>
		))
		return (
			<div className="eyeBox">
				<img
					src="icons/devilfire-compress.gif"
					className="devilFire"
					alt="devil fire"
				/>
				{eyeDisplay}
				<img
					src="icons/devilfire-compress.gif"
					className="devilFire"
					alt="devil fire"
				/>
			</div>
		)
	}
}

export default EyeBox
