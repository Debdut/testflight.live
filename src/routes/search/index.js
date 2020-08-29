import { Component } from 'preact'

import AppList from '@/components/app-list'
import Api from '@/api'

class Search extends Component {
  state = {
    apps: []
  }

  componentDidMount () {
		this.fetchApps()
	}

	fetchApps = async () => {
		const apps = await (Api.Apps()
		.query({ _embed: 'icons' })
    .query({ q: this.props.search })
		.get())

		this.setState({ apps })
	}

	render ({ search }, { apps }) {
		return (
			<div class='container'>
				<AppList apps={apps} title={`Search: ${search}`} />
			</div>
		)
	}
}

export default Search