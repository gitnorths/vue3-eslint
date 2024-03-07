import request from '@/utils/request'

const API = {
  GET_CODE: '/api/getCode',
  GET_REGISTER: '/api/getRegister'
}

export const reqCode = (data) => request.post(API.GET_CODE, data)
export const reqRegister = (data) => request.post(API.GET_REGISTER, data)
