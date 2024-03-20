'use client';
import { CardMedia, Stack } from '@mui/material';
import { useParams } from 'next/navigation';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useLazyGetOneBookByIdQuery } from '../../store/bookApi/book.api';
import booksSelectors from '../../store/bookApi/book.selector';
import About from '../Home/About';
interface TypeBook {
    title: string;
    author: string;
    description: string;
    image: any;
    id: string;
}
/**
 * BookItem component renders a book item based on book id passed in the url.
 * It uses `useLazyGetOneBookByIdQuery` query to fetch a book item from the api.
 * The component uses `useSelector` to get the book item from the redux store.
 * The component uses `useParams` hook to get the book id from the url.
 * The component renders an About component with the book title, author and description.
 * It renders a CardMedia component to display the book image.
 */
const BookItem = () => {
    const [getOneBookById] = useLazyGetOneBookByIdQuery(); // query to fetch a book item by id
    const params = useParams(); // hook to get the url params
    const { id }: any = params; // destructure the book id from the url params

    const itemBook = useSelector(booksSelectors.getBook()); // selector to get the book item from the redux store

    React.useEffect(() => {
        getOneBookById({ // side effect to fetch the book item by id
            id,
        });
    }, []); // run the effect only once, when the component mounts

    return (
        <Stack
            direction={{ xs: 'column', sm: 'row', md: 'row' }}
            spacing={{ xs: 2, sm: 3, md: 5 }} // spacing between the stacked elements
        >
            <About
                title={'About this audiobook'} // title of the About component
                author={itemBook?.author} // author of the book
                description={itemBook?.description} // description of the book
            />
            <CardMedia
                component="img" // component to render
                sx={{
                    width: { xs: 180, sm: 220, md: 260 }, // media width
                    height: { xs: 200, sm: 260, md: 280 }, // media height
                }}
                image={
                    itemBook?.image || // media src
                    'https://source.unsplash.com/random?books' // fallback src
                }
                alt={'book image'} // accessibility label
            />
        </Stack>
    );
};

export default BookItem;
