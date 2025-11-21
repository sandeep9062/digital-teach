
// store/store.ts
import { configureStore } from "@reduxjs/toolkit";

import { blogsApi } from "@/services/blogsApi";

import { contactApi } from "@/services/contactApi";

import { demoStudentApi } from "@/services/demoStudentApi";
import { demoSectionApi } from "@/services/demoSectionApi";
import { consultationApi } from "@/services/consultationApi";


const store = configureStore({
  reducer: {

    [contactApi.reducerPath]: contactApi.reducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
    [consultationApi.reducerPath]: consultationApi.reducer,

    [demoStudentApi.reducerPath]: demoStudentApi.reducer,
    [demoSectionApi.reducerPath]: demoSectionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([

      contactApi.middleware,
      blogsApi.middleware,
      consultationApi.middleware,
      demoStudentApi.middleware,
      demoSectionApi.middleware,
    ]),
  devTools: process.env.NODE_ENV !== "production", // ✅ enable Redux DevTools in development
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
