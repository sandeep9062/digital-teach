import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const demoSectionApi = createApi({
  reducerPath: "demoSectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL, 
  }),

  tagTypes: ["DemoSection"],

  endpoints: (builder) => ({
    submitDemoSection: builder.mutation({
      query: (body) => ({
        url: "/api/v1/demo-sections/submit",
        method: "POST",
        body,
      }),
      invalidatesTags: ["DemoSection"],
    }),
  }),
});

export const { useSubmitDemoSectionMutation } = demoSectionApi;
