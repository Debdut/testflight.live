import { Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'

// Code-splitting is automated for routes
import Home from '@/routes/home'
import Category from '@/routes/category'
// import Profile from '../routes/profile'

export default class App extends Component {
	
	handleRoute = e => {
		this.currentUrl = e.url
	}

	render() {
		return (
			<div id='app'>
				<Header />
				<div class='container pt-4'>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Category path="category/:category" />
					</Router>
				</div>
			</div>
		)
	}
}
