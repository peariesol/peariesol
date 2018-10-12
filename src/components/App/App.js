import React, { Component } from 'react'
import { random } from 'lodash'
import NavBar from '../NavBar/NavBar'
import Title from '../Title/Title'
import Home from '../../Pages/Home/Home'
import './App.css'

const cursors = [
	'help',
	'wait',
	'crosshair',
	'pointer',
	'not-allowed',
	'zoom-in'
]

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cursor: 'default'
		}
	}

	randomCursor = () => {
		this.setState({
			cursor: cursors[random(0, cursors.length)]
		})
	}

	render() {
		return (
			<div style={{ cursor: this.state.cursor }}>
				<NavBar />
				<Title randomCursor={this.randomCursor} />
				<Home />
			</div>
		)
	}
}

export default App
