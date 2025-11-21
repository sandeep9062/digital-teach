import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const demoSectionApi = createApi({
  reducerPath: "demoSectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL, // Example: https://ignotsolutions.com/api
  }),

  tagTypes: ["DemoSection"],

  endpoints: (builder) => ({
    submitDemoSection: builder.mutation({
      query: (body) => ({
        url: "/demo-section/submit",
        method: "POST",
        body,
      }),
      invalidatesTags: ["DemoSection"],
    }),
  }),
});

export const { useSubmitDemoSectionMutation } = demoSectionApi;
