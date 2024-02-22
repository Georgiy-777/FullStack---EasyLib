'use client';

import * as React from 'react';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MainFeaturedPost from '../components/Home/MainFeaturedPost';
import FeaturedPost from '../components/common/FeaturedPost';
import About from '../components/Home/About';
import Sidebar from '../components/common/SideBar';
import { MainWrapper } from 'components/components/ui/layout/MainWrapper';

const featuredPosts = [
    {
        title: 'Audiobooks',
        date: 'Nov 12',
        description:
            'Audiobooks allow you to listen anytime, anywhere. Scribd is the perfect antidote for life’s duller moments — like doing the dishes. ',
        image: '../img/audiobooks.png',
        imageLabel: 'Image Text',
    },
    {
        title: 'Magazines',
        date: 'Nov 11',
        description:
            'Stay connected to the world around you with our wide selection of digital magazines. Instantly access thousands of popular titles in business, tech, entertainment, and more.',
        image: '../img/magazines.png',
        imageLabel: 'Image Text',
    },
];

const sidebar = {
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'X', icon: XIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};

const description = `       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
ab! Quasi obcaecati id libero assumenda! Deserunt blanditiis
perspiciatis enim velit voluptatibus nihil, iste possimus
impedit exercitationem voluptas! Quidem, iure magni? Asperiores
vel veritatis culpa consectetur magni iusto ut. Id voluptates
minus quisquam eaque vitae modi commodi neque facere expedita
pariatur dolore, fugit natus, non enim quod libero impedit esse!
Dolore! Illo eos nisi vero alias minima dolore fugiat. Provident
explicabo alias minus possimus corporis debitis, labore, dolor
esse veniam porro impedit, vitae neque nostrum praesentium eos
similique quia dolorum quisquam. 
<br />Aut alias, earum quibusdam non
modi nisi, voluptatum cumque deserunt commodi quo velit repellat
adipisci perspiciatis sed nobis consequuntur? Animi totam quo
obcaecati. Qui, tenetur quas veniam eum ratione nesciunt.
<br /> Harum
consectetur maiores saepe voluptate odio doloremque cumque at
odit expedita rem ipsa nesciunt, quis aspernatur vero, minima
nam earum neque veritatis iusto cupiditate dignissimos. Nostrum
ipsa aperiam ratione sed! Vitae recusandae mollitia ut, eos a
ratione architecto reiciendis itaque dolorem tempora dignissimos
eaque consectetur nulla suscipit reprehenderit quasi, doloremque
sit ipsa quis. Deleniti aliquam at eaque labore numquam quos.
Quisquam praesentium perferendis architecto quo facilis
excepturi culpa amet! 
<br />Laborum reprehenderit ex rem praesentium
recusandae alias tenetur, corporis tempora quibusdam soluta
nisi. Numquam a facilis eligendi praesentium repellendus quas
molestias. Accusantium quae doloribus amet facilis facere
nesciunt, esse quod, quaerat soluta officiis saepe numquam
fugiat dolorum impedit, maxime dolor eveniet corporis! Culpa,
est pariatur. Numquam laudantium delectus ad provident
voluptatum. Sed totam praesentium nisi inventore officiis soluta
illum corrupti perferendis fugit saepe? Odit minus ex enim, fuga
in voluptatem nisi animi, aspernatur laudantium facere libero
cupiditate totam nemo sit reprehenderit. `;

export default function Home() {
    return (
        <MainWrapper>
            <MainFeaturedPost />
            <Grid container spacing={4}>
                {featuredPosts.map(post => (
                    <FeaturedPost key={post.title} post={post} />
                ))}
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
                <About title="About EasyLib" description={description} />
                <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    archives={sidebar.archives}
                    social={sidebar.social}
                />
            </Grid>
        </MainWrapper>
    );
}
