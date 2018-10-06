import React, { Component } from 'react'
import { colorNames } from '../../Utils/ColorNames'
import { random } from 'lodash'
import './Title.css'

let timeout = ''

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

	mouseDown = () => {
		timeout = setInterval(() => {
			// console.log('hey')
		}, 100)
	}

	mouseUp = () => {
		clearInterval(timeout)
	}

	render() {
		const background = `radial-gradient(
            ${this.state.colors.a}, 
            ${this.state.colors.b}, 
            ${this.state.colors.c}
        )`
		return (
			<div
				onMouseDown={this.mouseDown}
				onMouseUp={this.mouseUp}
				className="titleBox"
				onClick={this.handleClick}
				style={{ background: background }}
			>
				<h2 className="title font-effect-fire-animation">Pearie Sol</h2>
			</div>
		)
	}
}

export default Title
