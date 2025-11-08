import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api',

    prepareHeaders: async (headers) => {
      return new Promise((resolve) => {
        async function checkToken() {
          const clerk = window.Clerk;
          if (clerk) {
            const token = await clerk.session?.getToken();
            headers.set("Authorization", `Bearer ${token}`);
            resolve(headers);
          } else {
            setTimeout(checkToken, 500);
          }
        }
        checkToken();
      });
    },

   }),
  
  endpoints: (build) => ({

    getAllContent: build.query({
      query: () => `/contents`,
    }),
     createContent: build.mutation({
      query: (content) => ({
        url: "/contents",
        method: "POST",
        body: content,
      }),
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
export const { useGetAllContentQuery, useCreateContentMutation, useGetAllCategoriesQuery, useGetAllYearsQuery } = Api