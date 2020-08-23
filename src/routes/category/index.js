import { Component } from 'preact'

import AppList from '@/components/app-list'
import Api from '@/api'

class Category extends Component {
  state = {
    apps: []
  }

  componentDidMount() {
    this.fetchApps()
  }

  fetchApps() {

  }
}