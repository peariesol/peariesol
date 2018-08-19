import React, { Component } from 'react'
import { random } from 'lodash'
import NavBar from '../NavBar/NavBar'
import Title from '../Title/Title'
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
			cursor: cursors[random(0, cursors.length)]
		}
	}

	randomCursor = () => {
		this.setState({
			cursor: cursors[random(0, cursors.length)]
		})
	}
	render() {
		console.log(this.state.cursor)
		return (
			<div
				onMouseOver={this.randomCursor}
				style={{ cursor: this.state.cursor }}
			>
				<Title />
				<NavBar />
			</div>
		)
	}
}

export default App
