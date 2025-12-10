import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = import.meta.env.VITE_BASE_URL;


// Define a service using a base URL and expected endpoints
export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: `${BASE_URL}/api`,
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
        deleteContent: build.mutation({
     query: (id) => ({
       url: `/contents/${id}`,
        method: "DELETE",
      }),
    }),
    getAllCategories: build.query({
      query: () => `/categories`,
    }),
    getAllYears: build.query({
      query: () => `/years`,
    }),
    getAllStudyPacks: build.query({
      query: () => `/studyPacks`,
    }),
    createStudyPack: build.mutation({
      query: (studypack) => ({
        url: "/studyPacks",
        method: "POST",
        body: studypack,
      }),
    }),
    
    deleteStudyPack: build.mutation({
     query: (id) => ({
       url: `/studyPacks/${id}`,
        method: "DELETE",
      }),
    }),
    
    initiatePayment: build.mutation({
      query: (contentId) => ({
        url: '/payments/initiate',
        method: 'POST',
        body: { contentId },
      }),
    }),

    checkPurchaseStatus: build.query({
      query: (contentId) => `/payments/check/${contentId}`,
      providesTags: ['Purchase'],
    }),

    getUserPurchases: build.query({
      query: () => '/payments/user-purchases',
      providesTags: ['Purchase'],
    }),

   getAllHeadings: build.query({
      query: () => `/headings`,
    }),
    
    getAllMathsHeadings: build.query({
      query: () => `/maths_headings`,
    }),
    
    getAllPreEngHeadings: build.query({
      query: () => `/pre_eng_headings`,
    }),

    getAllMathsContent: build.query({
      query: () => `/mathscontents`,
    }),
     createMathsContent: build.mutation({
      query: (content) => ({
        url: "/mathscontents",
        method: "POST",
        body: content,
      }),
    }),
        deleteMathsContent: build.mutation({
     query: (id) => ({
       url: `/mathscontents/${id}`,
        method: "DELETE",
      }),
    }),

    getAllPEContent: build.query({
      query: () => `/pecontents`,
    }),
     createPEContent: build.mutation({
      query: (content) => ({
        url: "/pecontents",
        method: "POST",
        body: content,
      }),
    }),
        deletePEContent: build.mutation({
     query: (id) => ({
       url: `/pecontents/${id}`,
        method: "DELETE",
      }),
    }),

    
   getAllPapers: build.query({
      query: () => `/papers`,
    }),
     createPapers: build.mutation({
      query: (content) => ({
        url: "/papers",
        method: "POST",
        body: content,
      }),
    }),
        deletePapers: build.mutation({
     query: (id) => ({
       url: `/papers/${id}`,
        method: "DELETE",
      }),
    }),

     getAllMcontent: build.query({
      query: () => `/mcontents`,
    }),
     createMcontent: build.mutation({
      query: (content) => ({
        url: "/mcontents",
        method: "POST",
        body: content,
      }),
    }),
        deleteMcontent: build.mutation({
     query: (id) => ({
       url: `/mcontents/${id}`,
        method: "DELETE",
      }),
    }),

  GetResults: build.query({
      query: () => `/results`,
    }),
     AddResult: build.mutation({
      query: (content) => ({
        url: "/results",
        method: "POST",
        body: content,
      }),
    }),
  


  GetSPResults: build.query({
      query: () => `/spresults`,
    }),
     AddSPResult: build.mutation({
      query: (content) => ({
        url: "/spresults",
        method: "POST",
        body: content,
      }),
    }),

    
  GetMathsResults: build.query({
      query: () => `/mathsresults`,
    }),
     AddMathsResult: build.mutation({
      query: (content) => ({
        url: "/mathsresults",
        method: "POST",
        body: content,
      }),
    }),

  GetMSPResults: build.query({
      query: () => `/mspresults`,
    }),
     AddMSPResult: build.mutation({
      query: (content) => ({
        url: "/mspresults",
        method: "POST",
        body: content,
      }),
    }),

    GetPEResults: build.query({
      query: () => `/peresults`,
    }),
     AddPEResult: build.mutation({
      query: (content) => ({
        url: "/peresults",
        method: "POST",
        body: content,
      }),
    }),


     getAllPurchases: build.query({
      query: () => `/purchases`,
    }),

     createPurchase: build.mutation({
      query: (content) => ({
        url: "/purchases",
        method: "POST",
        body: content,
      }),
    }),




  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllContentQuery, 
  useCreateContentMutation,
  useGetAllCategoriesQuery,
  useGetAllYearsQuery,
  useGetAllStudyPacksQuery,
  useCreateStudyPackMutation,
  useGetAllHeadingsQuery,
  useDeleteContentMutation,
  useDeleteStudyPackMutation,
  useInitiatePaymentMutation,
  useCheckPurchaseStatusQuery,
  useGetUserPurchasesQuery,
  useCreateMathsContentMutation,
  useGetAllMathsContentQuery,
  useDeleteMathsContentMutation,
  useGetAllPEContentQuery,
  useCreatePEContentMutation,
  useDeletePEContentMutation,
  useGetAllPapersQuery,
  useCreatePapersMutation,
  useDeletePapersMutation,
  useGetAllMathsHeadingsQuery,
  useGetAllPreEngHeadingsQuery,
  useGetAllMcontentQuery,
  useCreateMcontentMutation,
  useDeleteMcontentMutation,
  useGetResultsQuery,
  useGetSPResultsQuery,
  useGetMathsResultsQuery,
  useGetMSPResultsQuery,
  useGetPEResultsQuery,
  useAddResultMutation,
  useAddMathsResultMutation,
  useAddSPResultMutation,
  useAddMSPResultMutation,
  useAddPEResultMutation,
useGetAllPurchasesQuery,
useCreatePurchaseMutation,} = Api