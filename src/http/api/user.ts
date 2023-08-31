import serviceAxios from '../index'

export const getUserInfo = (params: unknown) => {
  return serviceAxios({
    url: '/api/website/queryMenuWebsite',
    method: 'post',
    params
  })
}
export const login = (data: unknown) => {
  return serviceAxios({
    url: '/api/user/login',
    method: 'post',
    data
  })
}
