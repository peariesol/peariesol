import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css'
import App from './App/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
	<BrowserRouter>
		<Route render={({ location }) => <App location={location} />} />
	</BrowserRouter>,
	document.getElementById('root')
)
registerServiceWorker()
