/* This TypeScript code snippet is setting up an API service for managing books. Here's a breakdown of
what the code is doing: */
import { axiosService } from '../apiService/axiosService';
import { easyLibApi } from '../apiService/easyLibApi';
import { booksActions } from './book.slice';

interface TypeBook {
    title: string;
    author: string;
    description: string;
    image: any;
    id: string;
}
interface TypeBooksById {
    error: string;
    books: TypeBook[];
}
const bookApi = easyLibApi.injectEndpoints({
    endpoints: builder => ({
        /**
         * Create book
         */
        createBook: builder.mutation({
            async queryFn(incomeData, { dispatch }) {
                try {
                    const { data } = await axiosService.post(
                        `/api/book`,
                        incomeData,
                    );

                    return { data: true };
                } catch (error: any) {
                    return {
                        error: error?.message || 'An unknown error occurred',
                    };
                }
            },
            invalidatesTags: ['bookApi'],
        }),

        /**
         * Delete book
         */
        deleteBook: builder.mutation({
            async queryFn(options, { dispatch }) {
                try {
                    await axiosService.delete(`/api/book/${options.id}`);

                    return { data: true };
                } catch (error: any) {
                    return {
                        error: error?.message || 'An unknown error occurred',
                    };
                }
            },
            invalidatesTags: ['bookApi'],
        }),

        /**
         * Update book
         */
        updateBook: builder.mutation({
            async queryFn(incomeData, { dispatch }) {
                try {
                    const { data } = await axiosService.put(
                        `/api/book/${incomeData.id}`,
                        {
                            ...incomeData,
                        },
                    );

                    return { data: true };
                } catch (error: any) {
                    return {
                        error: error?.message || 'An unknown error occurred',
                    };
                }
            },
            invalidatesTags: ['bookApi'],
        }),

        /**
         * Get all books
         */
        getAllBooks: builder.query({
            async queryFn(__, { dispatch }) {
                try {
                    const { data } = await axiosService.get(`/api/book`);

                    if (data) {
                        dispatch(booksActions.setBooks(data));
                    } else {
                        dispatch(booksActions.setBooks(null));
                    }
                    return { data };
                } catch (error: any) {
                    return { error: error?.message || error };
                }
            },
            providesTags: ['bookApi'],
        }),

        /**
         * Get one book by id
         */
        getOneBookById: builder.query<TypeBooksById, { id: string }>({
            async queryFn(options, { dispatch }) {
                try {
                    const { data } = await axiosService.get(
                        `/api/book/${options.id}`,
                    );

                    if (data) {
                        dispatch(booksActions.setBook(data));
                    } else {
                        dispatch(booksActions.setBook(null));
                    }
                    return { data };
                } catch (error: any) {
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
