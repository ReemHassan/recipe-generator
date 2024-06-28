/** @format */

// components/IngredientsList.tsx

import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@mui/material';
import BulletIcon from '@mui/icons-material/FiberManualRecord';

export const recipe = {
    title: 'Köstliche Lasagne',
    description:
        'Lasagne ist ein klassisches italienisches Gericht, das aus mehreren Schichten Nudeln, Fleischsauce, Käse und Gewürzen besteht. Es ist bekannt für seinen reichen Geschmack und wird oft mit einem frischen Salat und knusprigem Brot serviert. Hier sind die Schritte, um eine köstliche Lasagne zuzubereiten:',
    cookingTime: '1 Std 30 Min',
    prepTime: '30 Min',
    servingSize: '8 Portionen',
    difficulty: 'Mittel',
    ingredients: [
        '12 Lasagne-Nudeln',
        '1 Pfund Hackfleisch',
        '1 Zwiebel, gehackt',
        '2 Knoblauchzehen, gehackt',
        '2 Dosen (jeweils 15 Unzen) Tomatensauce',
        '1 Dose (6 Unzen) Tomatenmark',
        '2 Dosen (jeweils 15 Unzen) zerdrückte Tomaten',
        '2 Teelöffel Zucker',
        '2 Teelöffel getrocknete Basilikumblätter',
        '1/2 Teelöffel Fenchelsamen',
        '1 Teelöffel italienisches Gewürz',
        '1 Esslöffel Salz',
        '1/4 Teelöffel gemahlener schwarzer Pfeffer',
        '4 Tassen Ricotta-Käse',
        '1 Ei',
        '3/4 Tasse geriebener Parmesan',
        '4 Tassen geriebener Mozzarella-Käse',
    ],
};

const IngredientsList = () => {
    return (
        <Box
            sx={{
                padding: { xs: '16px', md: '24px 16px' },
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                color: 'black',
                border: '4px solid white',
                borderRadius: '16px',
                textAlign: 'left',
                boxSizing: 'border-box', // Ensure padding and border are included in the height calculation
                mb: 0, // Remove bottom margin
            }}
        >
            <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{ ml: '1em', mb: 1 }} // Adjusted margin-left to align with bullet points
            >
                Zutaten
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    fontSize: '1rem',
                }}
            >
                <Box
                    sx={{
                        flex: '4', // Ensure equal width for both columns
                        paddingLeft: '1.2em', // Increased margin on the left by 1.2
                        paddingRight: '50px', // Ensure padding consistency
                    }}
                >
                    <List sx={{ mb: 0 }}>
                        {recipe.ingredients
                            .slice(0, Math.ceil(recipe.ingredients.length / 2))
                            .map((ingredient, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        padding: '0',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 'auto',
                                            marginRight: '8px',
                                        }}
                                    >
                                        <BulletIcon
                                            fontSize="small"
                                            sx={{
                                                fontSize: '1.1rem',
                                                color: '#86BC25',
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={ingredient}
                                        primaryTypographyProps={{
                                            fontSize: '1.1rem', // Reduced font size
                                            color: 'black', // Same color as steps description
                                        }}
                                    />
                                </ListItem>
                            ))}
                    </List>
                </Box>
                <Box
                    sx={{
                        flex: '4', // Ensure equal width for both columns
                        paddingLeft: '8px', // Ensure padding consistency
                    }}
                >
                    <List sx={{ mb: 0 }}>
                        {recipe.ingredients
                            .slice(Math.ceil(recipe.ingredients.length / 2))
                            .map((ingredient, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        padding: '0',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 'auto',
                                            marginRight: '8px',
                                        }}
                                    >
                                        <BulletIcon
                                            fontSize="small"
                                            sx={{
                                                fontSize: '1.1rem',
                                                color: '#86BC25',
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={ingredient}
                                        primaryTypographyProps={{
                                            fontSize: '1.1rem', // Reduced font size
                                            color: 'black', // Same color as steps description
                                        }}
                                    />
                                </ListItem>
                            ))}
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default IngredientsList;
