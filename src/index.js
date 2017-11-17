import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import RouterMap from '@router'
import storeConfig from '@redux/store/store.config.js'

const store = storeConfig({ config: global.$GLOBALCONFIG })
ReactDom.render(
  <Provider store={store}>
    <RouterMap />
  </Provider>
  , document.querySelector('#app'))
