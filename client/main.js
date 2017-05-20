import { Provider } from 'mobx-react'
import React from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { App } from './containers/app'
import stores from './stores'
import './router'
import './styles/main'

injectTapEventPlugin()

render(
  <Provider {...stores}>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('.root\\:app')
)
