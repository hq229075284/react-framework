/*
 * @Author: 韩卿
 * @Date: 2017-11-17 18:36:14
 * @Last Modified by: 韩卿
 * @Last Modified time: 2017-11-18 04:28:28
 */

import { createAction } from 'redux-actions'
import { createAjaxReducer } from '@fetch-redux'
import * as user from '@api'

const requestUserList = createAction('request_user_list')
const receivetUserList = createAction('receive_user_list')
export const getUserList = createAjaxReducer(user.getUserList, requestUserList, receivetUserList)
