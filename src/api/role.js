import request from '@/utils/request';

export function getRoutes() {
  return request({
    url: '/sa/routes',
    method: 'get'
  });
}

export function getRoles() {
  return request({
    url: '/sa/roles',
    method: 'get'
  });
}

export function addRole(data) {
  return request({
    url: '/sa/role',
    method: 'post',
    data
  });
}

export function updateRole(id, data) {
  return request({
    url: `/sa/role/${id}`,
    method: 'put',
    data
  });
}

export function deleteRole(id) {
  return request({
    url: `/sa/role/${id}`,
    method: 'delete'
  });
}
