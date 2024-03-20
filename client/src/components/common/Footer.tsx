/**
 * Footer component.
 *
 * Renders a footer with logo, title, copyright text and links.
 *
 * Props:
 * - description: Footer description text.
 * - title: Footer title.
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Logo from './Logo';
import { Stack } from '@mui/material';
import { useRouter } from 'next/navigation';

function Footer() {
    const router = useRouter();
    return (
        <Box component="footer" sx={{ bgcolor: '#FAF8F7', py: 2 }}>
            <Container maxWidth="lg">
                <Stack
                      onClick={() => {
                        router.push('/');
                    }}
                    sx={{ cursor: 'pointer' }}
                    direction={'row'}
                    spacing={2}
                    alignItems="center"
                    justifyContent={'center'}
                    py={2}
                >
                    <Logo />
                    <Typography
                        flexGrow={0}
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                    >
                        EasyLib
                    </Typography>
                </Stack>

                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Copyright © 2024 Scribd Inc.
                </Typography>
            </Container>
        </Box>
    );
}

Footer.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Footer;
