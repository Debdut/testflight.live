import { Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'

// Code-splitting is automated for routes
import Home from '@/routes/home'
import Category from '@/routes/category'
import App from '@/routes/app'
import Search from '@/routes/search'
// import Profile from '../routes/profile'

export default class Application extends Component {
	
	handleRoute = e => {
		this.currentUrl = e.url
	}

	render() {
		return (
			<div id='app'>
			<Header />
			<div class='pt-20 pb-10'>
				<Router onChange={this.handleRoute}>
					<Home path='/' />
					<Category path='category/:category' />
					<App path='app/:id' />
					<Search path='search/:search' />
				</Router>
			</div>
			</div>
		)
	}
}
