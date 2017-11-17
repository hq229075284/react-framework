/*
 * @Author: 韩卿
 * @Date: 2017-11-17 18:36:26
 * @Last Modified by: 韩卿
 * @Last Modified time: 2017-11-18 04:55:58
 */

import axios from 'axios'
import * as ajaxConfig from '@config/ajaxConfig'

let baseConfig = {
  // `url` is the server URL that will be used for the request
  url: '/',

  // `method` is the request method to be used when making the request
  method: 'post', // default

  // `baseURL` will be prepended to `url` unless `url` is absolute. It can be
  // convenient to set `baseURL` for an instance of axios to pass relative URLs to
  // methods of that instance.
  baseURL: '',

  // `transformRequest` allows changes to the request data before it is sent to
  // the server This is only applicable for request methods 'PUT', 'POST', and
  // 'PATCH' The last function in the array must return a string or an instance of
  // Buffer, ArrayBuffer, FormData or Stream
  // transformRequest: [
  //   function transformRequest(data) {
  //     // Do whatever you want to transform the data
  //     return data;
  //   },
  // ],

  // `transformResponse` allows changes to the response data to be made before it
  // is passed to then/catch
  // transformResponse: [
  //   function transformResponse(data) {
  //     // Do whatever you want to transform the data
  //     return data;
  //   },
  // ],

  // `headers` are custom headers to be sent
  headers: {
    'Content-Type': 'text/plain',
    // 'X-Requested-With': 'XMLHttpRequest',
  },

  // `params` are the URL parameters to be sent with the request Must be a plain
  // object or a URLSearchParams object
  params: {
    // ID: 12345,
  },

  // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  // paramsSerializer(params) {   return Qs.stringify(params, { arrayFormat:
  // 'brackets' }); }, `data` is the data to be sent as the request body Only
  // applicable for request methods 'PUT', 'POST', and 'PATCH' When no
  // `transformRequest` is set, must be of one of the following types:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream, Buffer
  data: {
    // firstName: 'Fred',
  },

  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: '',

  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default

  // `adapter` allows custom handling of requests which makes testing easier.
  // Return a promise and supply a valid response (see lib/adapters/README.md).
  // adapter(config) {   /* ... */ }, `auth` indicates that HTTP Basic auth should
  // be used, and supplies credentials. This will set an `Authorization` header,
  // overwriting any existing `Authorization` custom headers you have set using
  // `headers`. auth: {   username: 'janedoe',   password: 's00pers3cret', },
  // `responseType` indicates the type of data that the server will respond with
  // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // // `xsrfCookieName` is the name of the cookie to use as a value for xsrf
  // token xsrfCookieName: 'XSRF-TOKEN', // default // `xsrfHeaderName` is the
  // name of the http header that carries the xsrf token value xsrfHeaderName:
  // 'X-XSRF-TOKEN', // default // `onUploadProgress` allows handling of progress
  // events for uploads onUploadProgress(progressEvent) {   // Do whatever you
  // want with the native progress event }, // `onDownloadProgress` allows
  // handling of progress events for downloads onDownloadProgress(progressEvent) {
  //   // Do whatever you want with the native progress event },
  // `maxContentLength` defines the max size of the http response content allowed
  maxContentLength: 2000,

  // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to
  // `null` or `undefined`), the promise will be resolved; otherwise, the promise
  // will be rejected.
  validateStatus(status) {
    return status >= 200 && status < 300 // default
  },
}

baseConfig = { ...baseConfig, ...ajaxConfig }

export const fetchByPost = (url) => {
  // 当url参数为createApi创建的返回值
  if (typeof url === 'function') return url
  return (data, config) => axios({ ...baseConfig, ...config, url, data })
    .then(response => response.data)
    .catch((e) => { throw new Error(e) })
}

// export const fetchByGet = url => (data, config) => axios({ ...baseConfig, ...config, url, data, method: 'get' })
//   .then(response => response.data)
//   .catch((e) => { throw new Error(e) })

