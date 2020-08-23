import { Component } from 'preact'

import AppList from '@/components/app-list'
import Api from '@/api'

class Category extends Component {
  state = {
    apps: []
  }

  componentDidMount () {
		this.fetchApps()
	}

	fetchApps = async () => {
		const apps = await (Api.Apps()
		.query({ _embed: 'icons' })
    .query({ categories_like: this.props.category })
		.get())

		this.setState({ apps })
	}

	render ({ category }, { apps }) {
		return (
			<>
				<AppList apps={apps} title={category} />
			</>
		)
	}
}

export default Category