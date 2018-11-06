import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { random } from 'lodash'
import cursors from '../Utils/Cursors'
import NavBar from '../Components/NavBar/NavBar'
import BouncingTitle from '../Components/BouncingTitle/BouncingTitle'
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
				<NavBar location={this.props.location} />
				<BouncingTitle randomCursor={this.randomCursor} />
			</div>
		)
	}
}

App.propTypes = {
	location: PropTypes.object.isRequired
}

export default App
