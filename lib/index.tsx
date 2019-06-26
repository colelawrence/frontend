import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader'
import Root from './containers/Root'
import './app.global.scss'
import './monaco'

const configureStore = require('./store/configureStore')

const store = configureStore()

render(
  <ReactHotAppContainer>
    <Root store={store} />
  </ReactHotAppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root') // eslint-disable-line global-require
    render(
      <ReactHotAppContainer>
        <NextRoot store={store} />
      </ReactHotAppContainer>,
      document.getElementById('root')
    )
  })
}
