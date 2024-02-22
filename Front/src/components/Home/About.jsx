import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function About({ title, description, author }) {
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
                {title}
            </Typography>
            <Divider />
            {author && (
                <Typography variant="h3" component={'h3'} my={'20px'}>
                    Written by {author}
                </Typography>
            )}

            <Typography variant="subtitle1" paragraph marginTop={'20px'}>
                {description}
            </Typography>
        </Grid>
    );
}

About.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
};

export default About;
