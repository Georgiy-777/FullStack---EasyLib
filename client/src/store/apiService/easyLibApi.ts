import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * EasyLib API service.
 *
 * This API service is used to communicate with the EasyLib API.
 * It uses the `fetchBaseQuery` to specify the base URL of the API.
 * The `reducerPath` is used to specify the key used in the Redux store
 * to store the data returned from the API.
 * The `tagTypes` specify the tags used to group the API endpoints.
 * The `endpoints` property is used to define the actual API endpoints.
 */
export const easyLibApi = createApi({
  reducerPath: 'easyLib',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: [
    'bookApi',    
  ],
  endpoints: builder => ({}),
});


