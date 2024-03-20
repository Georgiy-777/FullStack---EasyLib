'use client';

import BookItem from '../../../components/Book/BookItem';
import  MainWrapper  from '../../../components/ui/layout/MainWrapper';

import React from 'react';

/**
 * The BookId page component.
 * This component is responsible for rendering a single book
 * based on its ID. It is rendered when the user visits a
 * book's page by its ID.
 * @returns {JSX.Element} The BookId page component
 */
const BookId = () => {

    return (
        // The MainWrapper component is the layout for this page
        <MainWrapper>
            {/* The BookItem component is responsible for rendering a single book */}
            <BookItem />
        </MainWrapper>
    );
};


export default BookId;