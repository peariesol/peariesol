import React, { Component } from 'react'
import { navLinks } from '../../Utils/NavLinks'
import { colorNames } from '../../Utils/ColorNames'
import { random } from 'lodash'
import { Link } from 'react-router-dom'
import Routes from '../../Routes'
import './NavBar.css'

// other option :
// a:
// "OldLace"
// b:
// "Black"
// c:
// "Crimson"

class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			colors: {
				a: 'Black',
				b: 'SkyBlue',
				c: 'Beige'
			},
			backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() *
				255}, ${Math.random() * 255}, ${Math.random()})`
		}
	}

	randomizeBackground = () => {
		this.setState({
			colors: {
				a: colorNames[random(0, colorNames.length)],
				b: colorNames[random(0, colorNames.length)],
				c: colorNames[random(0, colorNames.length)]
			}
		})
	}

	render() {
		const background = `linear-gradient(
            ${this.state.colors.a}, 
            ${this.state.colors.b}, 
            ${this.state.colors.c}
        )`
		return (
			<React.Fragment>
				<nav style={{ background }} className="navContainer">
					{navLinks.map(link => (
						<span
							key={link.value}
							className="navLink"
							onMouseOver={this.randomizeBackground}
						>
							<Link to={link.path}>
								<p id={link.value} className="navText">
									{link.text}
								</p>
							</Link>
						</span>
					))}
				</nav>
				<Routes />
			</React.Fragment>
		)
	}
}

export default NavBar
