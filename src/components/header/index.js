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
      <nav class='highlight opaque fixed w-full box-shadow overflow-y-scroll'>
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
  <a href='/' class='pr-2'>
    <Icon icon='BaseLogo' width='44px' height='44px' />
  </a>
)

const Search = ({ categories, toggle }) => {
  const stopHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  return (
    <div class='pb-4 md:px-20 w-full' onClick={toggle}>
      <div class='input-container opaque box-shadow' onClick={stopHandler}>
        <Icon icon='Search' class='input-icon' />
        <input type='text' placeholder='Search Apps' class='input bg-transparent' />
      </div>
      <CategoryList categories={categories} />
    </div>
  )
}

const ToggleSearch = ({ active, toggle }) => (
  <div class='pt-4 cursor-pointer' onClick={toggle}>
    <div class={`${style.bar} ${active ? style.barActive : ''}`} />
    <div class={`${style.bar} ${active ? style.barActive : ''}`} />
  </div>
)

export default Header