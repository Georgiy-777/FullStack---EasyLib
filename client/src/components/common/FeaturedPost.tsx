import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
interface TypePost {
    title: string;
    date: string;
    description: string;
    image: string;
    imageLabel: string;
}
interface FeaturedPostProps {
    post: TypePost;
}
/**
 * A featured post component that is used in the homepage
 */
const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
    // Render a featured post on the homepage
    // post: The post to render
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card
                    sx={{
                        display: 'flex', // Display as flexbox
                        borderRadius: 3, // Add some rounded corners
                        minHeight: '260px', // Set a minimum height so it looks good
                    }}
                >
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {post.title} 
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {post.description} 
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{
                            width: 160,
                            display: { xs: 'none', sm: 'block' }, // Hide on small screens
                        }}
                        image={post.image} // The image for the post
                        alt={post.imageLabel} // Alt text for the image
                    />
                </Card>
            </CardActionArea>
        </Grid>
    );
};



export default FeaturedPost;
