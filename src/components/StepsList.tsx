import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const steps = [
    'Den Ofen auf 190°C (375°F) vorheizen.',
    'Die Lasagne-Nudeln nach Packungsanweisung kochen.',
    'In einer großen Pfanne das Hackfleisch, die Zwiebel und den Knoblauch bei mittlerer Hitze braten, bis das Fleisch gebräunt ist.',
    'Tomatensauce, Tomatenmark, zerdrückte Tomaten, Zucker, Basilikum, Fenchelsamen, italienische Gewürze, Salz und Pfeffer einrühren.',
    '30 Minuten köcheln lassen und gelegentlich umrühren.',
    'In einer Schüssel Ricotta-Käse, Ei und Parmesan-Käse vermengen.',
    'Eine dünne Schicht Fleischsauce auf den Boden einer 23x33 cm (9x13 Zoll) großen Auflaufform streichen.',
    'Mit 3 Lasagne-Nudeln, 1/3 der Ricotta-Käse-Mischung, 1/3 des Mozzarella-Käses und 1/3 der Fleischsauce schichten.',
    'Die Schichten zweimal wiederholen.',
    'Mit Aluminiumfolie abdecken und 25 Minuten backen.',
    'Die Folie entfernen und weitere 25 Minuten backen.',
    'Die Lasagne 15 Minuten abkühlen lassen, bevor sie serviert wird.',
];

const StepsList = () => {
    return (
        <Box
            sx={{
                marginLeft: { xs: 0, md: 14 },
                marginRight: { xs: 0, md: 12 },
            }}
        >
            <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{ ml: 2, mt: 0 }}
            >
                Zubereitung
            </Typography>

            <List>
                {steps.map((step, index) => (
                    <ListItem
                        key={index}
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            mb: 2, // Add spacing between lines
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                color: '#86BC25', // Deloitte green color
                                fontSize: '1.2rem', // Same font size as description
                                marginRight: '8px',
                            }}
                        >
                            {index + 1}.
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '1.2rem', // Same font size as ingredients list
                                color: 'black', // Same color as ingredients list
                            }}
                        >
                            {step}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default StepsList;
