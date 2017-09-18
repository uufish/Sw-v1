import React, { Component } from 'react'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'

const styles = theme => {
  return {
    root: {
      display: 'block',
      marginBottom: '5px',
      width: '100%'
    },
    alignRight: {
      textAlign: 'right'
    },
    flexDisplay: {
      display: 'flex'
    },
    dense: {
      marginBottom: 0
    }
  }
}

@withStyles(styles)
export default class UILayout extends Component {
  render () {
    const {
      classes,
      className,
      align,
      flex,
      dense,
      ...other
    } = this.props
    return (
      <div
        {...other}
        className={classNames(
          classes.root, {
            [className]: className,
            [classes.dense]: dense
          })}
        style={{
          display: flex ? 'flex' : 'inline-block',
          textAlign: align || 'left'
        }}>
        {this.props.children}
      </div>
    )
  }
}