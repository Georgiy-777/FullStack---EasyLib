import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import { easyLibApi } from '../store/apiService/easyLibApi';
import booksSlice from '../store/bookApi/book.slice';

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
