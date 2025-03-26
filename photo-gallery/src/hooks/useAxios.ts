import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  type FetchPreset,
  type ServiceParams,
  type ServiceResponse,
  type ServiceBody,
  type ServiceError
} from '../config/types'

const useAxios = <
  P extends ServiceParams,
  B extends ServiceBody,
  R extends ServiceResponse,
  E extends ServiceError
>(
  setup: FetchPreset<P, B, R, E>,
  autoFetch: boolean = true
) => {
  const [requestState, setRequestState] = useState<{
    data: R | null
    error: E | null
    loading: boolean
    fetch: () => void
  }>({
    data: null as R | null,
    error: null as E | null,
    loading: true,
    fetch: () => {}
  })

  console.log(import.meta.env.VITE_UNSPLASH_APY_KEY)
  console.log(setup.params)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: setup.method,
          url: setup.url,
          headers: setup.headers,
          params: setup.params,
          data: setup.body
        })
        setRequestState({ data: response.data, error: null, loading: false, fetch: fetchData })
      } catch (error: unknown) {
        setRequestState({ data: null, error: error as E, loading: false, fetch: fetchData })
      }
    }
    if (autoFetch) fetchData()
  }, [setup, autoFetch])

  return requestState
}

export default useAxios
