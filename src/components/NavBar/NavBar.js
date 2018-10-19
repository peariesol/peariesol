import React from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { navLinks } from '../../Utils/NavLinks'
import Home from '../../Pages/Home/Home'
import Press from '../../Pages/Press/Press'
import Shows from '../../Pages/ShowsPage/ShowsPage'
import MoreCat from '../../Pages/MoreCat/MoreCat'
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
			<Switch>
				<Route
					path="/press"
					render={props => (
						<div className="page">
							<Press {...props} />
						</div>
					)}
				/>
				<Route
					path="/shows"
					render={props => (
						<div className="page">
							<Shows {...props} />
						</div>
					)}
				/>
				<Route
					path="/ok"
					render={props => (
						<div className="page">
							<MoreCat {...props} />
						</div>
					)}
				/>
				<Route
					path="/"
					render={props => (
						<div className="page">
							<Home {...props} />
						</div>
					)}
				/>
				<Route path="/*" render={props => <Redirect to="/" {...props} />} />
			</Switch>
		</React.Fragment>
	)
}

export default NavBar
