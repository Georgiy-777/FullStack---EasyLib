'use client';
import * as React from 'react';

// import { useRouter } from 'next/router';
import About from '../Home/About';
import { CardMedia, Grid, Stack } from '@mui/material';
import booksSelectors from 'components/store/bookApi/book.selector';
import { useLazyGetOneBookByIdQuery } from 'components/store/bookApi/book.api';
import { useSelector } from 'react-redux';
import { useParams } from 'next/navigation';

const BookItem = () => {
    const [getOneBookById] = useLazyGetOneBookByIdQuery();
    const params = useParams();
    const { id } = params;

    const itemBook = useSelector(booksSelectors.getBook());
    React.useEffect(() => {
        getOneBookById({
            id,
        });
    }, []);

    return (
        <Stack
            direction={{ xs: 'column', sm: 'row', md: 'row' }}
            spacing={{ xs: 2, sm: 3, md: 5 }}
        >
            <About
                title={'About this audiobook'}
                author={itemBook?.author}
                description={itemBook?.description}
            />
            <CardMedia
                component="img"
                sx={{
                    width: { xs: 180, sm: 220, md: 260 },
                    height: { xs: 200, sm: 260, md: 280 },
                }}
                image={itemBook?.image || 'https://source.unsplash.com/random?books'}
                alt={'book image'}
            />
        </Stack>
    );
};

export default BookItem;
