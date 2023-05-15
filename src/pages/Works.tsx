import React from 'react';
import { Typography, Box, Container, Card, CardContent, CardMedia } from '@mui/material';
import firstAlbumImage from '../assets/2.jpg';
import secondAlbumImage from '../assets/3.jpg';

const works = [
    {
        title: 'Grunge Album',
        description: 'Перший міні-альбом моєї групи, записані в живу, за один дубль, використовувались професійні мікрофони такі як Shure, Sennheiser. На студії у місті Вінниця.',
        image: firstAlbumImage
    },
    {
        title: 'Гранж рок',
        description: 'Другий альбом присвячений гранж року з його характерними зламами, потужними гітарними рифами та емоційними текстами. Це втілення справжньої сили рок-музики.',
        image: secondAlbumImage
    },
];

const Works: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Box mt={4}>
                <Typography variant="h2" align="center" gutterBottom>
                    Works
                </Typography>
                <Box
                    display="flex"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
                >
                    {works.map((work, index) => (
                        <Card key={index} sx={{ width: '300px', borderRadius: '16px' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={work.image}
                                alt={work.title}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {work.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {work.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}

export default Works;
