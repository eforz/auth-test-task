import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { BaseQueryFn } from '@reduxjs/toolkit/query'
// import axios from 'axios'
// import type { AxiosRequestConfig, AxiosError } from 'axios'

export interface ILoginCredentials {
    "username": string
    "password": string
  }

export const postUserAPI = createApi({
    reducerPath: 'postUserAPI',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://neurodoc.online',     
      prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json");
        console.log(headers);
        return headers;
      },
    }),
    tagTypes: ['loginRequests'],
    endpoints: (builder) => ({
        login: builder.mutation<ILoginCredentials, ILoginCredentials>({
          query: (user) => ({
            url: '/api/api/authenticate',
            method: 'POST',
            body: user,
          }),
        }),
      }),
})

// const axiosBaseQuery =
//   (
//     { baseUrl }: { baseUrl: string } = { baseUrl: '' }
//   ): BaseQueryFn<
//     {
//       url: string
//       method: AxiosRequestConfig['method']
//       data?: AxiosRequestConfig['data']
//       params?: AxiosRequestConfig['params']
//     },
//     unknown,
//     unknown
//   > =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params })
//       return { data: result.data }
//     } catch (axiosError) {
//       let err = axiosError as AxiosError
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       }
//     }
//   }

// export const postUserAPI = createApi({
//   baseQuery: axiosBaseQuery({
//     baseUrl: 'http://neurodoc.online',
//   }),
//   endpoints(build) {
//     return {
//       login: build.mutation({
//         query: (user) => ({ url: '/api/api/authenticate', method: 'post', data:user }),
//       }),
//     }
//   },
// })