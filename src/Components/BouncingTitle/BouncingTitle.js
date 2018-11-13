import React, { Component } from 'react'
import { colorNames } from 'Utils/ColorNames'
import PropTypes from 'prop-types'
import { random } from 'lodash'
import './BouncingTitle.css'

class BouncingTitle extends Component {
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
				className="bouncingTitleBox"
				onClick={this.handleClick}
				style={{ background }}
			>
				<h2 className="bouncingTitle">Pearie Sol</h2>
			</div>
		)
	}
}

BouncingTitle.propTypes = {
	randomCursor: PropTypes.func.isRequired
}

export default BouncingTitle
