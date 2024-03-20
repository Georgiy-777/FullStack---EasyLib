import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface AboutProps {
    title?: string;
    description?: string;
    author?: string;
}
/**
 * The about page component.
 */
const About: React.FC<AboutProps> = ({ title, description, author }) => {
    // The about page component.
    // It renders the about page with the title, description, and author.

    return (
        <Grid
            width={'100%'}
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                },
            }}
        >
            <Typography component="h1" variant="h1" marginBottom={'30px'}>
                {/* The page title. */}
                {title}
            </Typography>
            <Divider />
            {author && (
                <Typography variant="h3" component={'h3'} my={'20px'}>
                    {/* The author of the page. */}
                    Written by {author}
                </Typography>
            )}

            <Typography variant="subtitle1" paragraph marginTop={'20px'}>
                {/* The page description. */}
                {description}
            </Typography>
        </Grid>
    );
};

export default About;
