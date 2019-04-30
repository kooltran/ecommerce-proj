import { IRequestParams } from './index'

export const request = {
  get: (url: string) => {
    return fetch(url, {
      method: 'get',
    }).then(res => res.json())
  },
  post: ({ url, body }: IRequestParams) =>
    fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
    }),
}
