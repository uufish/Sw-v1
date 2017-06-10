import { Meteor } from 'meteor/meteor'
import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import propTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Block from '../components/ui-block'
import Layout from '../components/ui-layout'
import Sheet from '../components/ui-sheet'
import SheetContent from '../components/ui-sheet-content'
import SheetBackgroundImage from '../components/ui-sheet-background-image'
import utils from '../../imports/utils'

@inject('networks', 'user')
@observer
export default class NetworkList extends Component {
  render () {
    return (
      <Layout>
        {this.forNetworks()}
      </Layout>
    )
  }

  forNetworks () {
    const index = this.props.networks.index.slice()
    const isFetching = this.props.networks.isFetching
    if (index.length < 1) {
      return (
        <Sheet>
          <SheetContent>
            <Typography>
              {isFetching ? '読み込み中 ..' : 'データが見つかりませんでした'}
            </Typography>
          </SheetContent>
        </Sheet>
      )
    }
    return index.map(item =>
      <Sheet hover key={item._id} href={'/room/' + item._id + '/?preview=true'}>
        {item.univ &&
        <SheetContent type='caption'>
          <Typography>
            {utils.regions[item.channel].name.jp}・{item.univ}
          </Typography>
        </SheetContent>}
        <SheetContent>
          <Typography type='subheading'>
            {item.name}
          </Typography>
        </SheetContent>
        {item.header &&
        <SheetBackgroundImage src={
          item.header &&
          Meteor.settings.public.assets.network.root + item._id + '/' + item.header
        } />}
        <Block width={600}>
          <SheetContent>
            <Typography>
              {item.description}
            </Typography>
          </SheetContent>
        </Block>
      </Sheet>)
  }

  componentDidMount () {
    this.context.onScrollTop()
  }

  static get contextTypes () {
    return {
      onScrollTop: propTypes.any
    }
  }
}
