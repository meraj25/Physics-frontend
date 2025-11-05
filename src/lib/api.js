import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (build) => ({

    getAllContent: build.query({
      query: () => `/contents`,
    }),
    getAllCategories: build.query({
      query: () => `/categories`,
    }),
    getAllYears: build.query({
      query: () => `/years`,
    }),



  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllContentQuery, useGetAllCategoriesQuery, useGetAllYearsQuery } = Api