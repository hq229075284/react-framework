/*
 * @Author: 韩卿
 * @Date: 2017-11-18 21:03:00
 * @Last Modified by:   韩卿
 * @Last Modified time: 2017-11-18 21:03:00
 */
import hashHistory from '@history'

export function loginOut() {
  console.info('登出')
  hashHistory.push('/login')
}

