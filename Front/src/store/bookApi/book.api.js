import { axiosService } from '../apiService/axiosService';
import { easyLibApi } from '../apiService/easyLibApi';
import { bookActions, booksActions } from '../bookApi/book.slice';


/**
 * Represents the book API.
 * @typedef {Object} BookApi
 * @property {Function} createBook - Creates a new book.
 * @property {Function} deleteBook - Deletes a book.
 * @property {Function} updateBook - Updates a book.
 * @property {Function} getAllBooks - Retrieves all books.
 * @property {Function} getOneBookById - Retrieves a book by its ID.
 */
const bookApi = easyLibApi.injectEndpoints({
    endpoints: builder => ({
        createBook: builder.mutation({
            async queryFn(incomeData, { dispatch }) {
                try {
                    console.log('🚀 ~ queryFn ~ incomeData:', incomeData);

                    const { data } = await axiosService.post(`/api/book`, {
                        ...incomeData,
                    });
                    console.log('🚀 ~ queryFn ~ data:', data);

                    return { data: true };
                } catch (error) {
                    return {
                        error: error?.message || 'An unknown error occurred',
                    };
                }
            },
            invalidatesTags: ['bookApi'],
        }),
        deleteBook: builder.mutation({
            async queryFn(options, { dispatch }) {
                try {
                    await axiosService.delete(`/api/book/${options.id}`);

                    return { data: true };
                } catch (error) {
                    return {
                        error: error?.message || 'An unknown error occurred',
                    };
                }
            },
            invalidatesTags: ['bookApi'],
        }),
        updateBook: builder.mutation({
            async queryFn(incomeData, { dispatch }) {
                try {
                    console.log('🚀 ~ queryFn ~ incomeData:', incomeData);

                    const { data } = await axiosService.put(`/api/book`, {
                        ...incomeData,
                    });
                    console.log('🚀 ~ queryFn ~ data:', data);

                    return { data: true };
                } catch (error) {
                    return {
                        error: error?.message || 'An unknown error occurred',
                    };
                }
            },
            invalidatesTags: ['bookApi'],
        }),
        getAllBooks: builder.query({
            async queryFn(__, { dispatch }) {
                try {
                    const { data } = await axiosService.get(`/api/book`);

                    console.log('🚀 ~ queryFn ~ data:', data);
                    if (data) {
                        dispatch(booksActions.setBooks(data));
                    } else {
                        dispatch(booksActions.setBooks(null));
                    }
                    return { data };
                } catch (error) {
                    return { error: error?.message || error };
                }
            },
            providesTags: ['bookApi'],
        }),
        getOneBookById: builder.query({
            async queryFn(options, { dispatch }) {
                try {
                    const { data } = await axiosService.get(
                        `/api/book/${options.id}`,
                    );

                    console.log('🚀 ~ queryFn ~ data:', data);
                    if (data) {
                        dispatch(booksActions.setBook(data));
                    } else {
                        dispatch(booksActions.setBook(null));
                    }
                    return { data };
                } catch (error) {
                    return { error: error?.message || error };
                }
            },
            providesTags: ['bookApi'],
        }),
    }),
    overrideExisting: true,
});

export const {
    useCreateBookMutation,
    useLazyGetAllBooksQuery,
    useLazyGetOneBookByIdQuery,
    useDeleteBookMutation,
    useUpdateBookMutation,
} = bookApi;

export default bookApi;
