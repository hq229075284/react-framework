/*
 * @Author: huixie
 * @Date: 2017-07-25 11:24:49
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-11-17 11:07:09
 */

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { logger/* , crashReporter */ } from '@redux/store/middleware'
import rootReducer from 'reducers'

export default (initialState) => {
  const createStoreWithMiddleware = compose(
    applyMiddleware(
      thunk,
      logger,
      // crashReporter,
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  // 热加载,及时跟新reducer
  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers')
      store.replaceReducer(nextReducer)
    })
  }
  return store
}

