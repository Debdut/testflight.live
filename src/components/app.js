import { Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'
import Head from './head'

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

	render(props) {
		return (
			<div id='app'>
				<Head
					title='Tesflight App Store - Discover Amazing Apps'
  				description='Prelaunch your Beta, Testflight Apps. Grow your userbase and get necessary feedback for a great community.'
  				image={{
    				android: 'https://testflight.live/assets/logo/android-chrome-512x512.png',
    				apple: 'https://testflight.live/assets/logo/apple-touch-icon.png',
    				favicon: 'https://testflight.live/assets/images/favicon.ico' 
					}}
  				url='https://testflight.live'
  				twitter='@testflight_live'
  				manifest='/manifest.json'
				/>
				<Header />
				<div class='pt-20 pb-10 primary'>
					<Router onChange={this.handleRoute}>
						<Home path='/' />
						<Category path='category/:category' />
						<App path='app/:id' { ...props } />
						<Search path='search/:search' />
					</Router>
				</div>
			</div>
		)
	}
}