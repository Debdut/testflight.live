import { Component } from 'preact'

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
			<div>
				<h2 class='mb-6'>Trending</h2>
				<AppStack apps={trending} />
				<h2 class='my-6'>New</h2>
				<AppStack apps={latest} />
			</div>
		)
	}
}

const AppStack = ({ apps }) => (
	<ul class='bg-white px-4 rounded-lg'>
		{apps.map((app, index) => <App app={app} key={index} />)}
	</ul>
)

const App = ({ app: { name, logo, short, category, id, upvotes } }) => (
	<li class='border-b flex p-4 px-2'>
		<img class='h-16 rounded-lg' src={logo} alt='app logo' />
		<div class='pl-6 w-full'>
			<div class='float-right mt-4'>
				<i class='far fa-star text-2xl text-gray-700'></i>
				<p class='ml-1'>{upvotes}</p>
			</div>
			<a class='font-semibold text-lg' href={`/app/${id}`}>{name}</a>
			<p>{short}</p>
			<span class='bg-teal-200 text-teal-800 font-bold px-1 rounded'>{category}</span>
		</div>
	</li>
)

export default Home
