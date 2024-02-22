'use client';

import store from '@/store';
import '@/styles/global.css';
import theme from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';




const DefaultProvider = ({ children }) => {
  return (
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          {children}
          <div class="ball"></div>
        </ChakraProvider> 
      </Provider>    
  );
};

export default DefaultProvider;
