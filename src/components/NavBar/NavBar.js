import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { navLinks } from '../../Utils/NavLinks'
import './NavBar.scss'

const NavBar = () => {
	const [red, green, blue, alpha] = [
		Math.random() * 255,
		Math.random() * 255,
		Math.random() * 255,
		Math.random()
	]
	return (
		<React.Fragment>
			<nav
				style={{ background: `rgba(${red}, ${green}, ${blue}, ${alpha})` }}
				className="navContainer"
			>
				{navLinks.map(link => (
					<span key={link.value} className="navLink">
						{link.external ? (
							<a id={link.value} href={link.path}>
								<p className="navText">{link.text}</p>
							</a>
						) : (
							<Link id={link.value} to={link.path}>
								<p className="navText">{link.text}</p>
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

NavBar.propTypes = {}

export default NavBar
