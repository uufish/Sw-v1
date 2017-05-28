import { observer } from 'mobx-react'
import React, { Component } from 'react'
import propTypes from 'prop-types'
import releases from '../assets/release'

@observer
export default class Release extends Component {
  render () {
    return (
      <div className='container:release'>
        {releases.map(item =>
          <div className='block:release' key={item.version}>
            <h2 className='text:version'>{item.version}</h2>
            <p className='text:description' dangerouslySetInnerHTML={{__html: item.content.join('</br>')}}/>
          </div>
        )}
      </div>
    )
  }

  static get contextTypes () {
    return {onScrollTop: propTypes.any}
  }

  componentDidMount () {
    this.context.onScrollTop()
  }
}
