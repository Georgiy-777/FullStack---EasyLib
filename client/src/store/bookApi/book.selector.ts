/**
 * The above TypeScript code defines two selector functions for accessing book and books data from the
 * state using optional chaining.
 */
const getBook = () => (state: any) => state.bookApi?.book;
const getBooks = () => (state: any) => state.bookApi?.books;

const booksSelectors = {
    getBook,
    getBooks,
};

export default booksSelectors;
