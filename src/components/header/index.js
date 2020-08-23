import { Component } from 'preact'
import { Link } from 'preact-router/match'

import Icon from '@/components/icon'
import CategoryList from '@/components/category-list'
import Api from '@/api'

import style from './style.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      categories: []
    }
  }

  componentDidMount () {
    this.fetchCategories()
  }

  fetchCategories = async () => {
    const categories = await (Api.Categories()
      .get())
    this.setState({ categories })
  }

  toggle = () => {
    this.setState({ active: !this.state.active })
  }

  render ({ }, { active, categories }) {
    return (
      <nav class='overflow-hidden bg-white m-0 mx-auto'>
        <div class='container flex justify-between'>
          <Logo />
          { active ? <Search categories={categories} /> : null }
          <ToggleSearch active={active} toggle={this.toggle} />
        </div>
      </nav>
    )
  }
}

const Logo = () => (
  <Link to='/' class='py-4 pr-2'>
    <Icon icon='BaseLogo' width='44px' height='44px' fill='#0366d6' />
  </Link>
)

const Search = ({ categories }) => (
  <div class='py-4 md:px-20 w-full'>
    <div class='flex bg-gray-200 rounded-lg pl-4'>
      <span>
        <Icon icon='Search' fill='#9aa' class='inline' />
      </span>
      <input type='text' placeholder='Search Apps' class='p-2 px-4 w-full bg-gray-200 rounded-lg outline-none' />
    </div>
    <CategoryList categories={categories} />
  </div>
)

const ToggleSearch = ({ active, toggle }) => (
  <div class='pt-8 cursor-pointer' onClick={toggle}>
    <div class={`${style.bar} ${active ? style.barActive : ''}`} />
    <div class={`${style.bar} ${active ? style.barActive : ''}`} />
  </div>
)

export default Header