import React, { Component } from 'react'
import { createStyleSheet, withStyles } from 'material-ui/styles'

const styleSheet = createStyleSheet('UILayout', theme => {
  return {
    root: {
      paddingBottom: 20,
      [theme.breakpoints.up('sm')]: {
        paddingLeft: 10,
        paddingRight: 10
      }
    }
  }
})

@withStyles(styleSheet)
export default class UILayout extends Component {
  render () {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        {this.props.children}
      </div>
    )
  }
}
