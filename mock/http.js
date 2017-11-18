var http = require('http')
var _map = require('./interfaceMap')
var _filter = require('./interfaceFilter')
var Mock = require('mockjs')
http.createServer(function (request, response) {

  // 发送 HTTP 头部 HTTP 状态值: 200 : OK 内容类型: application/json
  response.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': 'Content-Type,token'
  });
  if (request.method === 'OPTIONS') {
    response.end(null);
  } else {
    var originData = _map[request.url]
      ? Mock.mock(_map[request.url])
      : ''
    var data = typeof (_filter[request.url]) === 'function'
      ? _filter[request.url](originData)
      : originData
    setTimeout(() => {
      // 发送响应数据
      response.end(JSON.stringify({ data: data, status: 1, msg: 'success' }));
    }, 5000)
  }
})
  .listen(1111, function () {
    console.log('server listen at 1111')
  });