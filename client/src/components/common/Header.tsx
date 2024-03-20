import { Box, Container, Stack } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import CreateBookModal from '../modals/CreateBookModal';
import Logo from './Logo';

import { css, styled } from '@mui/system';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

interface HeaderProps {
    title: string;
}
/**
 * The site header
 * @param title The page title
 */
const Header: React.FC<HeaderProps> = ({ title }) => {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    // Open the modal
    const handleOpen = () => setOpen(true);
    // Close the modal
    const handleClose = () => setOpen(false);
    return (
        <React.Fragment>
            {/* The site toolbar */}
            <Toolbar
                sx={{
                    marginBottom: 5,
                    bgcolor: '#FAF8F7',
                }}
            >
                <Container maxWidth="lg">
                    <Stack
                        justifyContent={'space-between'}
                        direction={'row'}
                        alignItems={'center'}
                    >
                        {/* The site logo */}
                        <Box
                            onClick={() => {
                                router.push('/');
                            }}
                            sx={{ cursor: 'pointer' }}
                        >
                            <Logo />
                        </Box>
                        {/* The page title */}
                        <Typography
                            onClick={() => {
                                router.push('/');
                            }}
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap
                            sx={{
                                flex: 1,
                                cursor: 'pointer',
                            }}
                        >
                            {title}
                        </Typography>

                        {/* The add new book button */}
                        <TriggerButton type="button" onClick={handleOpen}>
                            ADD NEW BOOK
                        </TriggerButton>
                    </Stack>
                </Container>
            </Toolbar>

            {/* The add new book modal */}
            <CreateBookModal isOpen={open} onClose={handleClose} />
        </React.Fragment>
    );
};

export default Header;
interface BackdropProps {
    className: string;
    open?: boolean;
}
const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(
    (props, ref) => {
        const { open, className, ...other } = props;
        return (
            <div
                className={clsx({ 'base-Backdrop-open': open }, className)}
                ref={ref}
                {...other}
            />
        );
    },
);

Backdrop.displayName = 'Backdrop';
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
