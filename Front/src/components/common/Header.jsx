import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Logo from './Logo';
import { Box, Container, Stack } from '@mui/material';
import CreateBookModal from '../modals/CreateBookModal';

import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import { useRouter } from 'next/navigation';

/**
 * Renders the header component.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.sections - The sections to be displayed in the header.
 * @param {string} props.title - The title of the header.
 * @returns {JSX.Element} The rendered header component.
 */
function Header({ sections, title }) {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <React.Fragment>
            <Toolbar sx={{ marginBottom: 5, bgcolor: '#FAF8F7' }}>
                <Container maxWidth="lg">

                <Stack
                    
                    justifyContent={'space-between'}
                    direction={'row'}
                    alignItems={'center'}
                >
                    <Box
                        onClick={() => {
                            router.push('/');
                        }}
                        sx={{ cursor: 'pointer' }}
                    >
                        <Logo />
                    </Box>
                    <Typography
                        onClick={() => {
                            router.push('/');
                        }}
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        sx={{ flex: 1, cursor: 'pointer' }}
                    >
                        {title}
                    </Typography>

                    <TriggerButton type="button" onClick={handleOpen}>
                        ADD NEW BOOK
                    </TriggerButton>
                </Stack>
                </Container>
            </Toolbar>

            <CreateBookModal isOpen={open} onClose={handleClose} />
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }),
    ),
    title: PropTypes.string.isRequired,
};

export default Header;

const Backdrop = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return (
        <div
            className={clsx({ 'base-Backdrop-open': open }, className)}
            ref={ref}
            {...other}
        />
    );
});

Backdrop.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
};

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
