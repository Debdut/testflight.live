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

  async componentWillMount () {
		await this.fetchApp()
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
      <h4 class='text-gray-light-6 mb-10'>{app.categories}</h4>
      <Status app={app} />
    </div>
  </header>
)

const Status = ({ app }) => {
  switch (app.status) {
    case 'Public':
      return (
        <a class='btn' href={app.testflight_url}>GET</a>
      )
    default:
      return (
        <span>{app.status}</span>
      )
  }
}

const CHAR_LIMIT = 290

class Description extends Component {
  state = {
    expand: false
  }

  toggle = () => {
    this.setState({ expand: !this.state.expand })
  }

  render({ text = '' }, { expand }) {
    const isButton = !expand && text.length > CHAR_LIMIT
    return (
      <div class='mt-10 font-light text-sm'>
        <p class='text-sm'>{expand ? text : text.slice(0, CHAR_LIMIT)}</p>
        {isButton ? <button onClick={this.toggle} class='float-right text-blue-dark' style={{ marginTop: -20, marginRight: 20}}>more</button> : null}
      </div>
    )
  }
}

const Screenshots = ({ screenshots }) => (
  <div class='flex overflow-x-scroll my-10 pb-6'>
    {screenshots.map((screenshot, index) => <img src={screenshot.url} alt='Screenshot' key={index} class={style.screenshot} />)}
  </div>
)

export default App