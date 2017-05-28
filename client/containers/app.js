import React, { Component } from 'react'
import Snackbar from './snackbar'
import Layout from './layout'

export default class App extends Component {
  render () {
    return <div>
      <Layout />
      <Snackbar />
    </div>
  }
}
