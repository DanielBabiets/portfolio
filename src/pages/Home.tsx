import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import photo from '.././assets/1.jpg';

const Home: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
                py={5}
            >
                <Typography variant="h1" align="center" gutterBottom>
                    Welcome to Guitarist's Portfolio
                </Typography>
                <Box component="img" src={photo} alt="Guitarist" maxWidth="50%" borderRadius="50%" mt={4} mb={4} />
                <Typography variant="h4" align="center" gutterBottom>
                    Meet the Guitarist
                </Typography>
                <Typography variant="body1" align="center" gutterBottom sx={{ fontFamily: 'serif', fontSize: '18px' }}>
                    I am a professional guitarist with over 10 years of experience in playing and performing. I specialize in rock and blues, but I have also dabbled in a variety of other genres, such as jazz, country, and classical music.
                </Typography>
                <Typography variant="body1" align="center" gutterBottom sx={{ fontFamily: 'serif', fontSize: '18px' }}>
                    I have been influenced by a variety of musicians, including Jimi Hendrix, Eric Clapton, and B.B. King. I strive to bring their innovative and expressive guitar playing into my own performances.
                </Typography>
                <Typography variant="body1" align="center" gutterBottom sx={{ fontFamily: 'serif', fontSize: '18px' }}>
                    I have performed in numerous venues across the country and have collaborated with many talented musicians. I am always looking for new opportunities to share my music and love for the guitar.
                </Typography>
            </Box>
        </Container>
    );
}

export default Home;
