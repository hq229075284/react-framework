/*
 * @Author: 韩卿
 * @Date: 2017-11-17 18:36:34
 * @Last Modified by: 韩卿
 * @Last Modified time: 2017-11-18 04:31:25
 */


import history from '@history'
import { message } from 'antd'
import { fetchByPost } from './ajax'

function _loginOut() {
  console.info('登出')
  history.push('/login')
}

// 创建发起api的启动器
export const createApi = api => fetchByPost(api)

// 执行fetch请求
export const createAjaxReducer = (createdApi, startAction, endAction) => (request, resolve, reject) => (dispatch) => {
  dispatch(startAction(request))
  const hooks = { abort: null }
  const triggerHandle = (new Promise((_resolve, _reject) => {
    hooks.abort = () => _reject('Ajax abort by code')
  }))
  Promise.race([createdApi(request), triggerHandle]).then((response) => {
    switch (response.status) {
      case 1: {
        dispatch(endAction(request, response))
        resolve && resolve(response)
        break
      }
      case 0: {
        message.error(response.msg)
        reject && reject(response)
        break
      }
      default:_loginOut()
    }
  }).catch((err) => { err && console.warn(err) })
  return hooks
}
