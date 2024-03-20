/* This TypeScript code snippet is setting up a Redux store using Redux Toolkit. Here's a breakdown of
what each part is doing: */
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import { easyLibApi } from './apiService/easyLibApi';
import booksSlice from './bookApi/book.slice';

const store = configureStore({
    reducer: {
        bookApi: booksSlice,
        [easyLibApi.reducerPath]: easyLibApi.reducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(easyLibApi.middleware),
    devTools: true,
});
export default store;
