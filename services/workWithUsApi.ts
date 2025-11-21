import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface WorkWithUsPayload {
  fullName: string;
  email: string;
  phone: string;
  altPhone?: string;
  dob: string;
  city: string;

  position: string;
  experience?: string;
  expectedSalary?: number;
  availability?: string;

  qualification: string;
  college?: string;
  specialization?: string;
  graduationYear?: number;

  skills?: string;
  projects?: string;

  linkedin?: string;
  github?: string;
  portfolio?: string;
  designProfile?: string;

  coverLetter?: string;
}

export const workWithUsApi = createApi({
  reducerPath: "workWithUsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/work-with-us`,
  }),
  endpoints: (builder) => ({
    submitWorkWithUsForm: builder.mutation<
      { message: string },
      WorkWithUsPayload
    >({
      query: (data) => ({
        url: "/submit",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSubmitWorkWithUsFormMutation } = workWithUsApi;
