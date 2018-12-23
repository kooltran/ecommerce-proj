import { request } from '../../src/helpers'
import { API_URL } from '../../src/constants'

export const homepageApi = () => {
  return request.get(`${API_URL.BASE}/init`)
}
