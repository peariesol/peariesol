import React, { Component } from 'react'
import { random } from 'lodash'
import cursors from '../Utils/Cursors'
import NavBar from '../components/NavBar/NavBar'
import BouncingTitle from '../components/BouncingTitle/BouncingTitle'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cursor: 'url("cursors/fire.cur"), help'
		}
	}

	randomCursor = () => {
		this.setState({
			cursor: `url(cursors/${cursors[random(0, cursors.length - 1)]}.cur), help`
		})
	}

	render() {
		return (
			<div style={{ cursor: this.state.cursor }}>
				<NavBar />
				<BouncingTitle randomCursor={this.randomCursor} />
			</div>
		)
	}
}

export default App
