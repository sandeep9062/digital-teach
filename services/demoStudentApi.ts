import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// 🔐 Helper to get token
const getToken = () =>
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/demo-students`;

const prepareHeaders = (headers: Headers) => {
    const token = getToken();
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
};

export const demoStudentApi = createApi({
    reducerPath: "demoStudentApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders,
    }),
    tagTypes: ["DemoStudents"],

    endpoints: (builder) => ({
        // 📌 Fetch all demo callback requests
        getDemoStudents: builder.query<any, void>({
            query: () => ``,
            providesTags: ["DemoStudents"],
        }),

        // 📌 Fetch single request
        getDemoStudentById: builder.query<any, string>({
            query: (id) => `/${id}`,
            providesTags: ["DemoStudents"],
        }),

        // 📌 Submit new demo callback form
        addDemoStudent: builder.mutation<any, any>({
            query: (body) => ({
                url: ``,
                method: "POST",
                body,
            }),
            invalidatesTags: ["DemoStudents"],
        }),

        // 📌 Update request
        updateDemoStudent: builder.mutation<any, { id: string; body: any }>({
            query: ({ id, body }) => ({
                url: `/${id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["DemoStudents"],
        }),

        // 📌 Delete request
        deleteDemoStudent: builder.mutation<any, string>({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["DemoStudents"],
        }),
    }),
});

export const {
    useGetDemoStudentsQuery,
    useGetDemoStudentByIdQuery,
    useAddDemoStudentMutation,
    useUpdateDemoStudentMutation,
    useDeleteDemoStudentMutation,
} = demoStudentApi;
