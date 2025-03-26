export type ServiceResponse = object | boolean | number | string | undefined
export type ServiceParams =
  | string
  | Record<string, string>
  | URLSearchParams
  | undefined
export type ServiceBody = BodyInit | object | undefined
export type ServiceError = object | undefined

export type FetchPreset<
  P extends ServiceParams,
  B extends ServiceBody,
  R extends ServiceResponse,
  E extends ServiceError
> = {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Record<string, string>
  params?: P
  body?: B
  response?: R
  error?: E
}

export type CustomImage = {
  id: string
  alt_description: string
  urls: {
    raw: string
  }
  likes: number
  user: {
    name: string
    bio: string
    portfolio_url: string
  }
}
