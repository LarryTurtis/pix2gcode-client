// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pix2CodeApi = createApi({
  reducerPath: "pix2CodeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `/px2gc/upload`,
  }),
  endpoints: (builder) => ({
    main: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      transformResponse: (response) => response.content,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useMainMutation } = pix2CodeApi;
