import request from '@/utils/request'

export function world() {
  return request({
    url: '/sa/map/world',
    method: 'get'
  })
}
