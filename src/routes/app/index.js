import { Component } from 'preact'

import Url from 'url-request'

import style from './style.css'

class App extends Component {
  state = {
    app: {
      icons: [{}],
      screenshots: [{}]
    }
  }

  componentDidMount () {
		this.fetchApp()
	}

	fetchApp = async () => {
		const app = await (Url(`http://localhost:1729/apps/${this.props.id}?_embed=screenshots&_embed=icons`)
		.get())

		this.setState({ app })
	}

	render ({ }, { app }) {
		return (
			<>
				<Header app={app} />
        <Description text={app.description} />
        <Screenshots screenshots={app.screenshots} />
			</>
		)
	}
}

const Header = ({ app }) => (
  <header class='flex mt-4'>
    <img src={app.icons[0].url} alt='Logo' class={style.logo} />
    <div class='ml-6'>
      <h3>{app.name}</h3>
      <h4 class='text-gray-700'>{app.categories}</h4>
      <Status app={app} />
    </div>
  </header>
)

const Status = ({ app }) => {
  switch (app.status) {
    case 'Public':
      return (
        <div>
          <a class='btn' href={app.testflight_url}>GET</a>
          <button class='btn'>SCAN</button>             
        </div>
      )
    default:
      return (
        <span>{app.status}</span>
      )
  }
}

class Description extends Component {
  state = {
    expand: false
  }

  render({ text }) {
    return (
      <p class='mt-10 text-lg font-light'>{text}</p>
    )
  }
}

const Screenshots = ({ screenshots }) => (
  <div class='flex overflow-x-scroll mt-8'>
    {screenshots.map((screenshot, index) => <img src={screenshot.url} alt='Screenshot' key={index} class={style.screenshot} />)}
  </div>
)

export default App