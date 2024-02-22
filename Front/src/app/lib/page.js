'use client';
import BookList from 'components/components/Book/BookList';
import { MainWrapper } from 'components/components/ui/layout/MainWrapper';
import * as React from 'react';
const Library = () => {

  
    return (
        <MainWrapper>
          <BookList/>
        </MainWrapper>
    );
};

export default Library;
