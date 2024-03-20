'use client';

import * as React from 'react';
import Grid from '@mui/material/Grid';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import MainFeaturedPost from '../components/Home/MainFeaturedPost';
import FeaturedPost from '../components/common/FeaturedPost';
import About from '../components/Home/About';
import Sidebar from '../components/common/SideBar';
import MainWrapper  from '../components/ui/layout/MainWrapper';
import { featuredPosts, description, social } from '../utils/index';

/**
 * The Home page.
 * It renders the home page.
 */
export default function Home() {    
    return (
        <MainWrapper>
            <MainFeaturedPost />
            <Grid container spacing={4}>
                {/* Iterates over featured posts and renders them */}
                {featuredPosts.map(post => (
                    <FeaturedPost key={post.title} post={post} />
                ))}
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
                <About
                    // The about section component.
                    // It renders the about section with the title and description.
                    title="About EasyLib"
                    description={description}
                />
                <Sidebar
                    // The sidebar component.
                    // It renders a sidebar with social links.
                    social={social}
                />
            </Grid>
        </MainWrapper>
    );
}
