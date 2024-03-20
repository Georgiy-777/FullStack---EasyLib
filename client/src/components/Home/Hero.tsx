import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

/**
 * Render the Hero component.
 *
 * @return {JSX.Element} The Hero component
 */
export default function Hero() {
    return (
        <Box
            id="hero"
            sx={{
                width: '100%',
                backgroundImage: 'linear-gradient(#22294F, #090E10)',
                backgroundSize: '100% 50%',
                opacity: 0.6,
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack
                    spacing={2}
                    useFlexGap
                    sx={{ width: { xs: '100%', sm: '70%' } }}
                >
                    <Typography
                        component="h1"
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignSelf: 'center',
                            textAlign: 'center',
                            color: '#fff',
                        }}
                    >
                        Enjoy popular&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                color: 'primary.light',
                            }}
                        >
                            ebooks
                        </Typography>
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        color="text.secondary"
                    >
                        Discover millions of ebooks, audiobooks, and so much
                        more <br />
                        Easybook your experience with top-tier features and
                        services.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}
