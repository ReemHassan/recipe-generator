/** @format */
'use client';

import React from 'react';
import Layout from '../layout';
import Image from 'next/image';
import { Box, Typography, Grid } from '@mui/material';
import {
    AccessTime as AccessTimeIcon,
    MenuBook as MenuBookIcon,
    EmojiPeople as ChefIcon,
    LocalDining as LocalDiningIcon,
    DirectionsRun as DirectionsRunIcon,
    Star as StarIcon,
} from '@mui/icons-material'; // Import MUI icons
import recipeImage from '../../components/Lasagne.jpg';
import deloitteLogo from '../../components/DeloitteDigital.jpeg';
import NutritionTable from '../../components/nutritionTable';
import StepsList from '../../components/StepsList';
import IngredientsList, { recipe } from '../../components/IngredientsList';

const commonBoxStyles = {
    padding: { xs: '16px', md: '24px 16px' },
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'black',
    border: '4px solid white',
    borderRadius: '16px',
};

const greenLineStyles = {
    height: '4px', // Increased thickness
    width: '80%', // Increased length
    backgroundColor: '#86BC25', // Deloitte green color
    margin: '8px auto 0', // Center the line horizontally and reduce vertical spacing
};

const imageBoxStyles = {
    borderRadius: '16px',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '1024px',
    margin: '0 auto',
    mb: 2, // Add some margin at the bottom for better spacing
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow to the image
};

const RatingStars = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <StarIcon sx={{ color: '#ccac00', fontSize: '2.5rem' }} />
        <StarIcon sx={{ color: '#ccac00', fontSize: '2.5rem' }} />
        <StarIcon sx={{ color: '#ccac00', fontSize: '2.5rem' }} />
        <StarIcon sx={{ color: '#ccac00', fontSize: '2.5rem' }} />
        <StarIcon sx={{ color: '#ccac00', fontSize: '2.5rem' }} />
    </Box>
);

export default function RecipePage() {
    return (
        <Layout>
            <Grid container spacing={4} sx={{ mx: 2, my: 4 }}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            ...commonBoxStyles,
                            textAlign: 'center',
                            mb: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mb: 2,
                            }}
                        >
                            <Image
                                src={deloitteLogo}
                                alt="Deloitte Digital Logo"
                                width={150}
                                height={50}
                                priority
                            />
                        </Box>
                        <Typography variant="h3" component="h1" gutterBottom>
                            {recipe.title}
                        </Typography>
                        <RatingStars />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 2,
                                mt: 2,
                                flexWrap: 'nowrap',
                                overflow: 'hidden',
                                mb: 4, // Add margin between icons and description
                            }}
                        >
                            {[
                                ['cookingTime', AccessTimeIcon],
                                ['prepTime', MenuBookIcon],
                                ['servingSize', LocalDiningIcon],
                                ['difficulty', DirectionsRunIcon],
                            ].map(([key, Icon], index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                    }}
                                >
                                    <Icon />
                                    <Typography>
                                        {recipe[key as keyof typeof recipe]}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mt: 2,
                                mb: 2,
                                width: '60%',
                                margin: '0 auto',
                                textAlign: 'center',
                                fontStyle: 'italic', // Make description italic
                                padding: { xs: '0 16px', md: '0 32px' }, // Increase left and right margin
                            }}
                        >
                            {recipe.description}
                        </Typography>
                    </Box>
                    <Box sx={imageBoxStyles}>
                        <Image
                            src={recipeImage}
                            alt={recipe.title}
                            layout="responsive"
                            width={600}
                            height={600}
                            objectFit="cover"
                            style={{
                                borderRadius: '16px',
                                transition: 'transform 0.3s ease',
                                width: '100%',
                            }}
                            priority
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center', // Center IngredientsList horizontally
                            mt: 0, // Removed margin on top for closer spacing
                            mb: 2, // Add some margin on bottom for better spacing with the green line
                        }}
                    >
                        <IngredientsList />
                    </Box>
                    <Box sx={greenLineStyles} />{' '}
                    {/* Horizontal green line after IngredientsList */}
                </Grid>
                <Grid item xs={12} sx={{ mt: 0.5 }}>
                    {/* Reduced margin top for closer spacing */}
                    <Box sx={{ ...commonBoxStyles, textAlign: 'left' }}>
                        <StepsList />
                    </Box>
                    <Box sx={greenLineStyles} />{' '}
                    {/* Horizontal green line after StepsList */}
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            width: '100%',
                            padding: { xs: 2, md: 4 },
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            color: 'black',
                            border: '4px solid white',
                            borderRadius: '16px',
                            textAlign: 'left',
                        }}
                    >
                        <Typography
                            variant="h6"
                            component="h2"
                            gutterBottom
                            sx={{ ml: 2 }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '2px',
                                }}
                            />
                        </Typography>
                        <NutritionTable />
                    </Box>
                </Grid>
            </Grid>
        </Layout>
    );
}
