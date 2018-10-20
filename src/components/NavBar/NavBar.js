import React from 'react'
import { navLinks } from '../../Utils/NavLinks'
import { Link } from 'react-router-dom'
import Routes from './Routes'
import './NavBar.css'

const [red, green, blue, alpha] = [
	Math.random() * 255,
	Math.random() * 255,
	Math.random() * 255,
	Math.random()
]

const NavBar = () => {
	return (
		<React.Fragment>
			<nav
				style={{ background: `rgba(${red}, ${green}, ${blue}, ${alpha})` }}
				className="navContainer"
			>
				{navLinks.map(link => (
					<span key={link.value} className="navLink">
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

export default NavBar
