import request from '../utils/request';

export function GET_USER_INFO(params) {
  return request(`http://老铁双击666.com/getUserInfo?=id${params.id}`)
}

