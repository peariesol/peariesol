import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Media from './Pages/Media/Media'
import Info from './Pages/Info/Info'
import Releases from './Pages/Releases/Releases'
import Shows from './Pages/ShowsPage/ShowsPage'
import MoreCat from './Pages/MoreCat/MoreCat'

const Routes = () => (
	<Switch>
		<Route
			path="/releases"
			render={props => (
				<div className="page">
					<Releases {...props} />
				</div>
			)}
		/>
		<Route
			path="/media"
			render={props => (
				<div className="page">
					<Media {...props} />
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
			path="/info"
			render={props => (
				<div className="page">
					<Info {...props} />
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
)

export default Routes
