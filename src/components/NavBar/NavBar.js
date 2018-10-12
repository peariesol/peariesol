import React from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { navLinks } from '../../Utils/NavLinks'
import './NavBar.scss'

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
						{link.external ? (
							<a href={link.path}>
								<p id={link.value} className="navText">
									{link.text}
								</p>
							</a>
						) : (
							<Link to={link.path}>
								<p id={link.value} className="navText">
									{link.text}
								</p>
							</Link>
						)}
					</span>
				))}
			</nav>
			<Switch>
				{navLinks.filter(link => !link.external).map(link => (
					<Route key={link.value} path={link.path} render={() => <div />} />
				))}
				<Route path="/*" render={() => <Redirect to="/" />} />
			</Switch>
		</React.Fragment>
	)
}

export default NavBar
