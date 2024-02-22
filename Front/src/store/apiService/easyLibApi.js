import { createApi } from '@reduxjs/toolkit/query/react';

export const easyLibApi = createApi({
  reducerPath: 'easyLib',
  tagTypes: [
    'bookApi',    
  ],
  endpoints: builder => ({}),
});


