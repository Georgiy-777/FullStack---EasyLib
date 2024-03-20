import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

/**
 * Main featured post on the home page
 * Displays an image, title, description, and link to find more
 */
function MainFeaturedPost() {
    return (
        <Paper
            // Main post background image
            sx={{
                position: 'relative',
                backgroundColor: 'inherit',
                color: '#fff',
                mb: 4,
                borderRadius: 3,

                // Set background image URL
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

                    // Cover the entire post
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />

            <Stack
                // Set post row direction and align content
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                height={'500px'}
            >
                <Box
                    // Set content padding for small and large screens
                    sx={{
                        position: 'relative',
                        p: { xs: 3, md: 6 },
                        pr: { md: 0 },
                    }}
                >
                    <Typography
                        // Set title display and font size
                        component="h2"
                        variant="h2"
                        color="inherit"
                        fontSize={{ xs: '2.5rem', sm: '3.5rem' }}

                        // Add space between lines
                        gutterBottom
                    >
                        Enjoy popular&nbsp;
                        <Typography
                            // Set title span display and font size
                            component="span"
                            variant="h2"
                            fontSize={{ xs: '2.5rem', sm: '3.5rem' }}

                            // Set title span color
                            sx={{
                                color: 'primary.light',
                            }}
                        >
                            ebooks
                        </Typography>
                    </Typography>
                    <Typography
                        // Set description font size
                        fontSize={{ xs: '1.0rem', sm: '2.0rem' }}

                        // Set description variant and color
                        variant="h5"
                        color="inherit"

                        // Add paragraph spacing
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
                // Set link display and position
                display="block"
                variant="subtitle1"
                href="/lib"
                sx={{
                    // Set link border and padding
                    border: '1px solid #fff',
                    py: 0.5,
                    px: 1,
                    borderRadius: 3,

                    // Set link position and text decoration
                    position: 'absolute',
                    zIndex: 100,
                    bottom: 30,
                    left: 50,
                    textDecoration: 'none',

                    // Set link font size
                    fontSize: { xs: '0.7rem', sm: '1.5rem' },

                    // Set link color
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
        description: PropTypes.string,
        image: PropTypes.string,
        imageText: PropTypes.string,
        linkText: PropTypes.string,
        title: PropTypes.string,
    }),
};

export default MainFeaturedPost;
