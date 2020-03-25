import request from '@/utils/request';

export function world() {
  return request({
    url: '/sa/map/world',
    method: 'get'
  });
}

export function york() {
  return request({
    url: '/sa/map/york',
    method: 'get'
  });
}

export function leeds() {
  return request({
    url: '/sa/map/leeds',
    method: 'get'
  });
}

export function bradford() {
  return request({
    url: '/sa/map/bradford',
    method: 'get'
  });
}
