import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sa/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/sa/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/sa/user/logout',
    method: 'post'
  })
}

export function searchUser(name) {
  return request({
    url: '/sa/search/user',
    method: 'get',
    params: { name }
  })
}
