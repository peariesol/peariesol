import React, { Component } from 'react'
import { random } from 'lodash'
import NavBar from '../NavBar/NavBar'
import Title from '../Title/Title'
import Home from '../../Pages/Home/Home'
import './App.css'

//http://www.rw-designer.com/gallery
const cursors = ['fire', 'horse', 'skull', 'skull', 'snake_skin', 'snake_skull']

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
				<Title randomCursor={this.randomCursor} />
				<Home />
			</div>
		)
	}
}

export default App
