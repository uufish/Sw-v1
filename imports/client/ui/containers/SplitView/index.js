import classNames from 'classnames'
import withStyles from 'material-ui/styles/withStyles'
import { inject, observer } from 'mobx-react'
import compose from 'ramda/src/compose'
import React, { Component } from 'react'

class SplitView extends Component {
  render () {
    const {classes, drawer, children} = this.props
    return (
      <div
        className={classNames(classes.root, {
          [classes.left]: drawer.isOpen,
          [classes.right]: !drawer.isOpen
        })}>
        {children}
      </div>
    )
  }
}

export const styles = theme => ({
  root: {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100%',
    overflowY: 'scroll',
    overflowX: 'hidden',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      transition: 'translateX 0'
    },
    [theme.breakpoints.down('sm')]: {
      width: '200%',
      transition: 'transform 300ms'
    }
  },
  left: {
    transform: 'translate3d(50%, 0, 0)'
  },
  right: {
    transform: 'translate3d(0, 0, 0)'
  }
})

export default compose(
  withStyles(styles),
  inject(stores => ({drawer: stores.drawer})),
  observer
)(SplitView)