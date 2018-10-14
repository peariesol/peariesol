import React, { Component } from 'react'
import { colorNames } from '../../Utils/ColorNames'
import PropTypes from 'prop-types'
import { random } from 'lodash'
import './Title.css'

class Title extends Component {
	constructor(props) {
		super(props)
		this.state = {
			colors: {
				a: colorNames[random(0, colorNames.length)],
				b: colorNames[random(0, colorNames.length)],
				c: colorNames[random(0, colorNames.length)]
			}
		}
	}

	handleClick = () => {
		this.setState({
			colors: {
				a: colorNames[random(0, colorNames.length)],
				b: colorNames[random(0, colorNames.length)],
				c: colorNames[random(0, colorNames.length)]
			}
		})
	}

	render() {
		const background = `radial-gradient(
            ${this.state.colors.a}, 
            ${this.state.colors.b}, 
            ${this.state.colors.c}
        )`
		return (
			<div
				onMouseOver={this.props.randomCursor}
				className="titleBox"
				onClick={this.handleClick}
				style={{ background }}
			>
				<h2 className="title font-effect-fire-animation">Pearie Sol</h2>
			</div>
		)
	}
}

Title.propTypes = {
	randomCursor: PropTypes.func.isRequired
}

export default Title
