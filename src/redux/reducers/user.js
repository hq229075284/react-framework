/*
 * @Author: huixie
 * @Date: 2017-07-25 14:13:03
 * @Last Modified by: 韩卿
 * @Last Modified time: 2017-11-18 01:16:59
 */

import { handleActions } from 'redux-actions'

export const userList = handleActions({
  request_user_list(preState, action) {
    return { loading: true }
  },
  receive_user_list(preState, action) {
    return { loading: true }
  },
}, { list: [], loading: false })
