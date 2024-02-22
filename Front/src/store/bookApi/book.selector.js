const getBook = () => (state) => state.bookApi?.book;
const getBooks = () => (state) => state.bookApi?.books;



const booksSelectors = {
  getBook,
  getBooks
};

export default booksSelectors;
