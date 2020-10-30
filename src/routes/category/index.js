import { Component } from 'preact'

import AppList from '@/components/app-list'
import HeadTag from '@/components/head'
import Api from '@/api'


class Category extends Component {
	constructor(props) {
		super(props)
		this.state = {
			apps: props.apps || []
		}
	}

  componentDidMount () {
		if (typeof window !== 'undefined') {
			this.fetchApps()
		}
	}

	fetchApps = async () => {
		const apps = await (Api.Apps()
		.query({ _embed: 'icons' })
    .query({ categories_like: this.props.category })
		.get())

		this.setState({ apps })
	}

	shouldComponentUpdate() {
		this.fetchApps()
  }

	render ({ category }, { apps }) {
		return (
			<div class='container'>
				<AppList apps={apps} title={category} />
				<HeadTag title={`Category - ${category}`} />
			</div>
		)
	}
}

export default Category