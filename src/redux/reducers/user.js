/*
 * @Author: huixie
 * @Date: 2017-07-25 14:13:03
 * @Last Modified by: 韩卿
 * @Last Modified time: 2017-11-18 22:22:37
 */

import { handleActions } from 'redux-actions'

export const user = handleActions({
  request_user_list(preState, action) {
    return { loading: true }
  },
  receive_user_list(preState, action) {
    return { list: action.payload.data.list, loading: true }
  },
}, { list: [], loading: false })
