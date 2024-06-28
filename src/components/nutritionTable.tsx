import * as React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const nutritionData = [
    { name: 'Kcal.', amount: '350' },
    { name: 'Fett', amount: '15g' },
    { name: 'KH', amount: '35g' },
    { name: 'Eiweiß', amount: '20g' },
];

const NutritionTable = () => {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '360px',
                ml: 'auto',
                mr: 'auto',
                textAlign: 'center',
                mb: 4, // Add bottom margin for spacing
            }}
        >
            <Typography variant="h6" gutterBottom>
                Nährwerte
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {nutritionData.map((item, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                        <Paper
                            sx={{
                                p: 2, // Adjust padding for spacing
                                textAlign: 'center',
                                boxShadow: 'none', // Remove shadow
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                gutterBottom
                            >
                                {item.name}
                            </Typography>
                            <Typography variant="body1">
                                {item.amount}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default NutritionTable;
