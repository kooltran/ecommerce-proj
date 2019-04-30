import { request } from 'utils'
import { API_URL } from 'config'

export const homepageApi = () => {
  return request.get(`${API_URL.BASE}/init`)
}
