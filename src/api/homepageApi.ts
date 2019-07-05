import { request } from 'utils/helpers'
import { API_URL } from 'config/constants'

export const homepageApi = () => {
  return request.get(`${API_URL.BASE}/init`)
}
