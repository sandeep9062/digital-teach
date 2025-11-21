import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// 🔐 Helper to get token safely on client-side
const getToken = () =>
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/consultations`;

const prepareHeaders = (headers: Headers) => {
  const token = getToken();
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  return headers;
};

export const consultationApi = createApi({
  reducerPath: "consultationApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders,
  }),
  tagTypes: ["Consultations"],

  endpoints: (builder) => ({
    // 📌 Fetch all consultations
    getConsultations: builder.query<any, void>({
      query: () => ``,
      providesTags: ["Consultations"],
    }),

    // 📌 Fetch consultation by ID
    getConsultationById: builder.query<any, string>({
      query: (id) => `/${id}`,
      providesTags: ["Consultations"],
    }),

    // 📌 Book a new consultation (POST)
    addConsultation: builder.mutation<any, any>({
      query: (body) => ({
        url: ``,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Consultations"],
    }),

    // 📌 Update consultation details
    updateConsultation: builder.mutation<any, { id: string; body: any }>({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Consultations"],
    }),

    // 📌 Delete a consultation
    deleteConsultation: builder.mutation<any, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Consultations"],
    }),
  }),
});

// Export Hooks
export const {
  useGetConsultationsQuery,
  useGetConsultationByIdQuery,
  useAddConsultationMutation,
  useUpdateConsultationMutation,
  useDeleteConsultationMutation,
} = consultationApi;
