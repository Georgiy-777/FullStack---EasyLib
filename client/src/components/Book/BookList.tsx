import { CardMedia, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { css, styled } from '@mui/system';
import booksSelectors from '../../store/bookApi/book.selector';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useLazyGetAllBooksQuery } from '../../store/bookApi/book.api';
import BookEdit from './BookEdit';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#FAF8F7' : '#FAF8F7',
    height: '210px',
    padding: 5,
    textDecoration: 'none',
    border: '1px solid inherit',

    ':hover': {
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
    },
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
interface TypeBook {
    title: string;
    author: string;
    description: string;
    image: any;
    id: string;
}

/**
 * BookList component.
 *
 * This component is responsible for displaying a list of books.
 */
const BookList = () => {
    // Query for fetching all books
    const [getAllBooks] = useLazyGetAllBooksQuery();
    // Router for navigating to book details
    const router = useRouter();
    // Get all books from redux store
    const listBooks = useSelector(booksSelectors.getBooks());
    // Fetch all books on mount
    React.useEffect(() => {
        getAllBooks(null);
    }, []);

    return (
        <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            mb={'50px'}
        >
            {/* Display the list of books */}
            {listBooks && listBooks?.length > 0 ? (
                listBooks?.map((item: TypeBook) => (
                    <Grid item xs={12} md={6} key={item?.id}>
                        <Item sx={{ height: '100%' }}>
                            {/* Display the book item */}
                            <Stack
                                direction={'row'}
                                spacing={{ xs: 1, sm: 2, md: 3 }}
                                p={{ xs: 2, md: 3 }}
                            >
                                {/* Book cover */}
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: { xs: 80, sm: 120, md: 160 },
                                        height: { xs: 100, sm: 160, md: 180 },
                                    }}
                                    image={
                                        item?.image ||
                                        'https://source.unsplash.com/random?books'
                                    }
                                    alt={'book image'}
                                />
                                <Stack
                                    direction={'column'}
                                    spacing={'2'}
                                    flexGrow={1}
                                    alignItems={'start'}
                                    position={'relative'}
                                >
                                    {/* Edit book button */}
                                    <BookEdit item={item} />

                                    {/* Book title */}
                                    <Typography
                                        onClick={() =>
                                            router.push(`/book/${item?.id}`)
                                        }
                                        component={'h5'}
                                        sx={{
                                            textDecoration: 'underline',
                                            fontWeight: 'bold',
                                            fontSize: '1.2rem',
                                            ':hover': {
                                                cursor: 'pointer',
                                            },
                                        }}
                                    >
                                        {item?.title}
                                    </Typography>

                                    {/* Book author */}
                                    <Typography
                                        variant="subtitle2"
                                        component={'span'}
                                    >
                                        {item?.author}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Item>
                    </Grid>
                ))
            ) : (
                <Stack
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={'100%'}
                    spacing={3}
                >
                    <Typography variant="h1" color={'dark'} fontSize={'2rem'}>
                        {' '}
                        Some waiting...
                    </Typography>
                </Stack>
            )}
        </Grid>
    );
};

export default BookList;

const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const TriggerButton = styled('button')(
    ({ theme }) => css`
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.5;
        padding: 8px 16px;
        border-radius: 8px;
        transition: all 150ms ease;
        cursor: pointer;
        background: '#fff';
        border: 1px solid grey[200];
        color: grey[900];
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

        &:hover {
            background: grey[50];
            border-color: grey[300];
        }

        &:active {
            background: grey[100];
        }

        &:focus-visible {
            box-shadow: 0 0 0 4px blue[200];
            outline: none;
        }
    `,
);
