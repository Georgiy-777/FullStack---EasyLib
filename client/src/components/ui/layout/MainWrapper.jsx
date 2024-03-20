'use client';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Stack } from '@mui/material';
import { Provider } from 'react-redux';
import store from "../../../../src/store/index";
import Footer from '../../common/Footer';
import Header from '../../common/Header';
export default function MainWrapper  ({
    children,
    header = true,
    footer = true,
}) {
    const defaultTheme = createTheme();
    return (
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />

            <Stack
                direction={'column'}
                height={'100vh'}
                width={'100%'}
                justifyContent={'space-between'}
            >
       
                    {header ? (
                        <Header title="EasyLib" />
                    ) : null}
        
                <Container maxWidth="lg" flexgrow={1}>
                    <main>{children}</main>
                </Container>

                {footer ? (
                    <Footer
                        title="Footer"
                        description="Something here to give the footer a purpose!"
                    />
                ) : null}
            </Stack>
        </ThemeProvider>
      </Provider>



    );
};