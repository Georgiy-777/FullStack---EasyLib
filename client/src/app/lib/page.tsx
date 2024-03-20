'use client';
import BookList from '../../components/Book/BookList';
import MainWrapper  from '../../components/ui/layout/MainWrapper';
import * as React from 'react';
/**
 * The library page is the main page of the app. It is the starting point
 * for the user and is where they will see a list of books. The component
 * is wrapped in the MainWrapper component which provides the layout for
 * the page.
 * @returns {JSX.Element} The library page component
 */
const Library = () => {  
  return (
    <MainWrapper>
      {/* The BookList component is responsible for rendering a list of
      books. It is the main feature of this page. */}
      <BookList />
    </MainWrapper>
  );
};

export default Library;
