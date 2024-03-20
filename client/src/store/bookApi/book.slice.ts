/* This code snippet is defining a Redux slice using the `createSlice` function from the
`@reduxjs/toolkit` package in TypeScript. */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    book: null,
    books: null,
};

const booksSlice = createSlice({
    name: 'bookApi',
    initialState,
    reducers: {
        setBook: (state, { payload }) => {
            state.book = payload;
        },

        setBooks: (state: any, { payload }) => {
            state.books = [...payload] || null;
        },
    },
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;
