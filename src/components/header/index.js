import { Component } from 'preact'
import { Link } from 'preact-router/match'

import Api from '@/api'
import Icon from '@/components/icon'

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

  menu = () => {
    if (!this.state.active) {
      return null
    }
    return (
      <div class='py-4 md:px-20 w-full'>
        <div class='flex bg-gray-200 rounded-lg pl-4'>
          <span>
            <SearchIcon />
          </span>
          <input type='text' placeholder='Search Apps' class='p-2 px-4 w-full bg-gray-200 rounded-lg outline-none' />
        </div>
        {this.categoryList()}
      </div>
    )
  }

  categoryList = () => {
    const categories = this.state.categories
      .map((category, index) => <li class='border-b p-2 pl-4' key={index}>
        <a href={`/category/${category}`}>{category}</a>
      </li>)
    return (
      <ul class='mt-4'>
        {categories}
      </ul>
    )
  }

  render ({}, { active }) {
    
    return (
      <nav class='overflow-hidden bg-white m-0 mx-auto'>
        <div class='container flex justify-between'>
          <Link to='/' class='py-4 pr-2 flex'>
            <Icon icon='BaseLogo' width='44px' height='44px' fill='#0366d6'/>
          </Link>
          
          {this.menu()}

          <div class='pt-8 cursor-pointer' onClick={this.toggle}>
            <div class={`${style.bar} ${active ? style.barActive : ''}`}></div>
            <div class={`${style.bar} ${active ? style.barActive : ''}`}></div>
          </div>
        </div>
      </nav>
    )
  }
}

const SearchIcon = () => (
  <svg viewBox='0 0 3.7041668 11.641667' height='44' width='14' fill='#9aa' class='inline'>
    <g transform='matrix(0.97865947,0,0,0.97865947,-18.209185,-74.390797)'>
        <path d='m 19.070369,80.532362 c -0.618144,0.618143 -0.619255,1.62581 -7.32e-4,2.244333 0.570867,0.570865 1.473777,0.613735 2.095614,0.131181 l 0.945308,0.945309 0.280633,-0.280633 -0.945308,-0.945309 c 0.482552,-0.621838 0.439684,-1.524746 -0.131182,-2.095613 -0.618523,-0.618523 -1.62619,-0.617413 -2.244333,7.32e-4 z m 0.280632,0.280632 c 0.466517,-0.466515 1.216631,-0.467898 1.683433,-0.0011 0.466802,0.466801 0.466882,1.218378 3.64e-4,1.684894 -0.466512,0.466513 -1.21809,0.466436 -1.684892,-3.67e-4 -0.466803,-0.466801 -0.465418,-1.216918 0.0011,-1.683432 z' />
    </g>
  </svg>
)

export default Header