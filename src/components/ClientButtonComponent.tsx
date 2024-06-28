/** @format */
'use client';
import React, { useState } from 'react';
import { Box, Button, Snackbar, Alert } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';

const downloadPage = () => {
    const element = document.createElement('a');
    const file = new Blob([document.documentElement.outerHTML], {
        type: 'text/html',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'recipe.html';
    document.body.appendChild(element);
    element.click();
};

const printPage = () => {
    window.print();
};

const ClientButtonComponent = () => {
    const [open, setOpen] = useState(false);

    const handleAddToFavorites = () => {
        setOpen(true);
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 4,
                gap: 2,
            }}
        >
            <Button
                variant="contained"
                color="primary"
                startIcon={<FavoriteIcon />}
                sx={{ width: '66.66%' }}
                onClick={handleAddToFavorites}
            >
                Zu Favoriten hinzufügen
            </Button>
            <Button
                variant="contained"
                color="primary"
                sx={{ width: '16.66%' }}
                onClick={downloadPage}
            >
                <DownloadIcon />
            </Button>
            <Button
                variant="contained"
                color="primary"
                sx={{ width: '16.66%' }}
                onClick={printPage}
            >
                <PrintIcon />
            </Button>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                sx={{ width: '300px' }} // Adjust the width as needed
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: '100%', fontSize: '1.2rem' }}
                >
                    Rezept zu Favoriten hinzugefügt
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ClientButtonComponent;
