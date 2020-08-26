import { Component } from 'preact'

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

  render ({}, { active, categories }) {
    return (
      <nav class='highlight overflow-hidden m-0 mx-auto'>
        <div class='container flex justify-between'>
          <Logo />
          { active ? <Search categories={categories} toggle={this.toggle} /> : null }
          <ToggleSearch active={active} toggle={this.toggle} />
        </div>
      </nav>
    )
  }
}

const Logo = () => (
  <a href='/' class='py-4 pr-2'>
    <Icon icon='BaseLogo' width='44px' height='44px' fill='#0366d6' />
  </a>
)

const Search = ({ categories, toggle }) => {
  const stopHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  return (
    <div class='py-4 md:px-20 w-full' onClick={toggle}>
      <div class='input-container primary'  onClick={stopHandler}>
        <Icon icon='Search' class='input-icon' />
        <input type='text' placeholder='Search Apps' class='input' />
      </div>
      <CategoryList categories={categories} />
    </div>
  )
}

const ToggleSearch = ({ active, toggle }) => (
  <div class='pt-8 cursor-pointer' onClick={toggle}>
    <div class={`${style.bar} ${active ? style.barActive : ''}`} />
    <div class={`${style.bar} ${active ? style.barActive : ''}`} />
  </div>
)

export default Header