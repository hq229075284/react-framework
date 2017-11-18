/*
 * @Author: 韩卿
 * @Date: 2017-11-17 18:36:34
 * @Last Modified by: 韩卿
 * @Last Modified time: 2017-11-18 22:28:49
 */

// 执行fetch请求
export const createAjaxReducer = (createdApi, startAction, endAction) => (request, resolve, reject, config) => (dispatch) => {
  dispatch(startAction(request))
  const _resolve = (response) => {
    dispatch(endAction(response))
    resolve(response)
  }
  return createdApi(request, _resolve, reject, config)
}
