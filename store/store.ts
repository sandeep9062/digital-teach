
// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { blogsApi } from "@/services/blogsApi";
import { consultationApi } from "@/services/consultationApi";
import { contactApi } from "@/services/contactApi";
import { demoSectionApi } from "@/services/demoSectionApi";
import { demoStudentApi } from "@/services/demoStudentApi";
import { workWithUsApi } from "@/services/workWithUsApi";

const store = configureStore({
  reducer: {
    [blogsApi.reducerPath]: blogsApi.reducer,
    [consultationApi.reducerPath]: consultationApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [demoSectionApi.reducerPath]: demoSectionApi.reducer,
    [demoStudentApi.reducerPath]: demoStudentApi.reducer,
    [workWithUsApi.reducerPath]: workWithUsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      blogsApi.middleware,
      consultationApi.middleware,
      contactApi.middleware,
      demoSectionApi.middleware,
      demoStudentApi.middleware,
      workWithUsApi.middleware,
    ]),
  devTools: process.env.NODE_ENV !== "production", // ✅ enable Redux DevTools in development
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
