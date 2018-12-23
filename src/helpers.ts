export interface IRequestParams {
  url: string
  body: any
  username: string
  email: string
}

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
