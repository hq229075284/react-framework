/*
 * @Author: huixie
 * @Date: 2017-07-25 11:18:33
 * @Last Modified by: 韩卿
 * @Last Modified time: 2017-11-18 22:27:11
 */

// 记录日志
const logger = store => next => (action) => {
  // console.log('dispatching', action)
  const result = next(action)
  // console.log('next state', store.getState())
  return result
}

// 崩溃报告
// const crashReporter = store => next => (action) => {
//   try {
//     return next(action)
//   } catch (err) {
//     console.error('Caught an exception!', err)
//     Raven.captureException(err, {
//       extra: {
//         action,
//         state: store.getState(),
//       },
//     })
//     throw err
//   }
// }

export { logger }
