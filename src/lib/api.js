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
          if (clerk && clerk.session) {
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

  tagTypes: [
    'Content',
    'Category',
    'Year',
    'StudyPack',
    'Purchase',
    'Heading',
    'MathsHeading',
    'PreEngHeading',
    'MathsContent',
    'PEContent',
    'Papers',
    'Mcontent',
    'Result',
    'SPResult',
    'MathsResult',
    'MSPResult',
    'PEResult',
  ],

  endpoints: (build) => ({

    getAllContent: build.query({
      query: () => `/contents`,
      providesTags: ['Content'],
    }),
    createContent: build.mutation({
      query: (content) => ({
        url: "/contents",
        method: "POST",
        body: content,
      }),
      invalidatesTags: ['Content'],
    }),
    deleteContent: build.mutation({
      query: (id) => ({
        url: `/contents/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Content'],
    }),

    getAllCategories: build.query({
      query: () => `/categories`,
      providesTags: ['Category'],
    }),

    getAllYears: build.query({
      query: () => `/years`,
      providesTags: ['Year'],
    }),

    getAllStudyPacks: build.query({
      query: () => `/studyPacks`,
      providesTags: ['StudyPack'],
    }),
    createStudyPack: build.mutation({
      query: (studypack) => ({
        url: "/studyPacks",
        method: "POST",
        body: studypack,
      }),
      invalidatesTags: ['StudyPack'],
    }),
    deleteStudyPack: build.mutation({
      query: (id) => ({
        url: `/studyPacks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['StudyPack'],
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
      providesTags: (result, error, contentId) => [
        { type: 'Purchase', id: contentId },
        'Purchase'
      ],
    }),

    getUserPurchases: build.query({
      query: () => '/payments/user-purchases',
      providesTags: ['Purchase'],
    }),

    getAllHeadings: build.query({
      query: () => `/headings`,
      providesTags: ['Heading'],
    }),

    getAllMathsHeadings: build.query({
      query: () => `/maths_headings`,
      providesTags: ['MathsHeading'],
    }),

    getAllPreEngHeadings: build.query({
      query: () => `/pre_eng_headings`,
      providesTags: ['PreEngHeading'],
    }),

    getAllMathsContent: build.query({
      query: () => `/mathscontents`,
      providesTags: ['MathsContent'],
    }),
    createMathsContent: build.mutation({
      query: (content) => ({
        url: "/mathscontents",
        method: "POST",
        body: content,
      }),
      invalidatesTags: ['MathsContent'],
    }),
    deleteMathsContent: build.mutation({
      query: (id) => ({
        url: `/mathscontents/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['MathsContent'],
    }),

    getAllPEContent: build.query({
      query: () => `/pecontents`,
      providesTags: ['PEContent'],
    }),
    createPEContent: build.mutation({
      query: (content) => ({
        url: "/pecontents",
        method: "POST",
        body: content,
      }),
      invalidatesTags: ['PEContent'],
    }),
    deletePEContent: build.mutation({
      query: (id) => ({
        url: `/pecontents/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['PEContent'],
    }),

    getAllPapers: build.query({
      query: () => `/papers`,
      providesTags: ['Papers'],
    }),
    createPapers: build.mutation({
      query: (content) => ({
        url: "/papers",
        method: "POST",
        body: content,
      }),
      invalidatesTags: ['Papers'],
    }),
    deletePapers: build.mutation({
      query: (id) => ({
        url: `/papers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Papers'],
    }),

    getAllMcontent: build.query({
      query: () => `/mcontents`,
      providesTags: ['Mcontent'],
    }),
    createMcontent: build.mutation({
      query: (content) => ({
        url: "/mcontents",
        method: "POST",
        body: content,
      }),
      invalidatesTags: ['Mcontent'],
    }),
    deleteMcontent: build.mutation({
      query: (id) => ({
        url: `/mcontents/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Mcontent'],
    }),

    GetResults: build.query({
      query: () => `/results`,
      providesTags: ['Result'],
    }),
    AddResult: build.mutation({
      query: (content) => ({
        url: "/results",
        method: "POST",
        body: content,
      }),
      invalidatesTags: ['Result'],
    }),

    GetSPResults: build.query({
      query: () => `/spresults`,
      providesTags: ['SPResult'],
    }),
    AddSPResult: build.mutation({
      query: (content) => ({
        url: "/spresults",
        method: "POST",
        body: content,
      }),
      invalidatesTags: ['SPResult'],
    }),

    GetMathsResults: build.query({
      query: () => `/mathsresults`,
      providesTags: ['MathsResult'],
    }),
    AddMathsResult: build.mutation({
      query: (content) => ({
        url: "/mathsresults",
        method: "POST",
        body: content,
      }),
      invalidatesTags: ['MathsResult'],
    }),

    GetMSPResults: build.query({
      query: () => `/mspresults`,
      providesTags: ['MSPResult'],
    }),
    AddMSPResult: build.mutation({
      query: (content) => ({
        url: "/mspresults",
        method: "POST",
        body: content,
      }),
      invalidatesTags: ['MSPResult'],
    }),

    GetPEResults: build.query({
      query: () => `/peresults`,
      providesTags: ['PEResult'],
    }),
    AddPEResult: build.mutation({
      query: (content) => ({
        url: "/peresults",
        method: "POST",
        body: content,
      }),
      invalidatesTags: ['PEResult'],
    }),

    getAllPurchases: build.query({
      query: () => `/purchases`,
      providesTags: ['Purchase'],
    }),

    createPurchase: build.mutation({
      query: (content) => ({
        url: "/purchases",
        method: "POST",
        body: content,
      }),
      invalidatesTags: ['Purchase'],
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