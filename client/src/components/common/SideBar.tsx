import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
interface TypeSocial {
    name: string;
    icon: any;
}
interface SidebarProps {
    social: TypeSocial[];
}

/**
 * The sidebar component.
 * It renders a sidebar with social links.
 * @param social - an array of social links
 */
const Sidebar: React.FC<SidebarProps> = ({ social }) => {
    // The sidebar component.
    // It renders a sidebar with social links.
    return (
        <Grid
            item
            xs={12}
            md={4}
        >
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Social
            </Typography>
            {/* Iterates over social links and renders them */}
            {social.map(network => (
                <Link
                    // The social link component.
                    // It renders a social link with the name and icon.
                    display="block"
                    variant="body1"
                    href="#"
                    key={network.name}
                    sx={{ mb: 0.5 }}
                >
                    <Stack direction="row" spacing={1} alignItems="center">
                        {/* The social link icon */}
                        <network.icon />
                        <span>{network.name}</span>
                    </Stack>
                </Link>
            ))}
        </Grid>
    );
};

export default Sidebar;
