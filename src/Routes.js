import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Media from './Pages/Media/Media'
import Info from './Pages/Info/Info'
import Releases from './Pages/Releases/Releases'
import Shows from './Pages/ShowsPage/ShowsPage'
import MoreCat from './Pages/MoreCat/MoreCat'
import FourOhFour from './Pages/FourOhFour/FourOhFour'

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
			exact
			render={props => (
				<div className="page">
					<Home {...props} />
				</div>
			)}
		/>
		<Route
			render={props => (
				<div className="page">
					<FourOhFour {...props} />
				</div>
			)}
			component={FourOhFour}
		/>
		{false && (
			<Route
				path="/*"
				render={props => (
					<div className="page">
						<FourOhFour {...props} />
					</div>
				)}
			/>
		)}
	</Switch>
)

export default Routes
