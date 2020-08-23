import { Component } from 'preact'

import AppList from '@/components/app-list'
import Api from '@/api'

import style from './style'

class Home extends Component {
	state = {
		latest: [],
		trending: []
	}

	componentDidMount () {
		this.fetchApps()
	}

	fetchApps = async () => {
		const trending = await (Api.Apps()
		.query({ _page: 2, _limit: 5 })
		.get())

		this.setState({ trending })

		const latest = await (Api.Apps()
		.query({ _page: 1, _limit: 5 })
		.get())

		this.setState({ latest })
	}

	render ({}, { latest, trending }) {
		return (
			<>
				<AppList apps={trending} title='Trending' />
				<AppList apps={latest} title='New' />
			</>
		)
	}
}

export default Home
