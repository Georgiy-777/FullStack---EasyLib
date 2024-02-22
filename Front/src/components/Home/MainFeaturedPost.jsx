import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { CardMedia, Stack } from '@mui/material';

function MainFeaturedPost(props) {
    const { post } = props;

    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'inherit',
                color: '#fff',
                mb: 4,
                borderRadius: 3,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('https://source.unsplash.com/random?books')`,
            }}
        >
            {/* Increase the priority of the hero background image */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    borderRadius: 3,

                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                //   spacing={2}
                height={'500px'}
            >
                <Box
                    sx={{
                        position: 'relative',
                        p: { xs: 3, md: 6 },
                        pr: { md: 0 },
                    }}
                >
                    <Typography
                        component="h2"
                        variant="h2"
                        color="inherit"
                        fontSize={{ xs: '2.5rem', sm: '3.5rem' }}
                        gutterBottom
                    >
                        Enjoy popular&nbsp;
                        <Typography
                            component="span"
                            variant="h2"
                            fontSize={{ xs: '2.5rem', sm: '3.5rem' }}
                            sx={{
                                color: 'primary.light',
                            }}
                        >
                            ebooks
                        </Typography>
                    </Typography>
                    <Typography
                        fontSize={{ xs: '1.0rem', sm: '2.0rem' }}
                        variant="h5"
                        color="inherit"
                        paragraph
                    >
                        Discover millions of ebooks, audiobooks, and so much
                        more <br />
                        Easylib your experience with top-tier features and
                        services.
                    </Typography>
                </Box>


            </Stack>
            <Link
                display="block"
                variant="subtitle1"
                href="/lib"
                sx={{
                    border: '1px solid #fff',
                    py: 0.5,
                    px: 1,
                    borderRadius: 3,

                    position: 'absolute',
                    zIndex: 100,
                    bottom: 30,
                    left: 50,
                    textDecoration: 'none',
                    fontSize: { xs: '0.7rem', sm: '1.5rem' },
                    color: 'primary.dark',
                }}
            >
                Find more
            </Link>
        </Paper>
    );
}

MainFeaturedPost.propTypes = {
    post: PropTypes.shape({
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageText: PropTypes.string.isRequired,
        linkText: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default MainFeaturedPost;
