import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    book: null,
    books: null 
  };

const booksSlice = createSlice({
  name: 'bookApi',
  initialState,
  reducers: {
    setBook: (state, { payload }) => {
      state.book = payload;
    },
    
    setBooks: (state, { payload }) => {
        state.books = [...payload] || null;
      },
 
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;
