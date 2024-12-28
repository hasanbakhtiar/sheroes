import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),

  endpoints: (builder) => ({
    getUser: builder.query({
        query: () => `users`,
      }),
    getUserById: builder.query({
      query: (id) => `users/${id}`,
    }),
    createUser:builder.mutation({
        query:(newUser)=>({
            url:`users`,
            method:'POST',
            body:newUser
        })
    })


  }),

})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery,useGetUserByIdQuery,useCreateUserMutation } = jsonPlaceholderApi;