import request from '@/utils/request';

export function pumpAvailabilityList(query) {
  return request({
    url: '/sa/pump-availability/list',
    method: 'get',
    params: query
  });
}

export function pumpScoreList(query) {
  return request({
    url: '/sa/pump-score/list',
    method: 'get',
    params: query
  });
}
