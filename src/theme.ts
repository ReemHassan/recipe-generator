/** @format */

'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: {
        primary: {
            main: '#86BC25', // Deloitte green
        },
        secondary: {
            main: '#000000', // Optionally set secondary color to black
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    // Apply Deloitte green to all button variants
                    backgroundColor: '#86BC25',
                    color: '#ffffff',
                    borderRadius: '20px', // More rounded edges
                    '&:hover': {
                        backgroundColor: '#76A71F',
                    },
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: '#86BC25',
                    '&.Mui-checked': {
                        color: '#86BC25',
                    },
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    color: '#86BC25',
                    '&.Mui-checked': {
                        color: '#86BC25',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '20px', // More rounded edges for outlined input
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#86BC25', // Change focus frame color
                        },
                        '&.Mui-focused': {
                            boxShadow: 'none', // Remove focus shadow
                        },
                    },
                    '& .MuiInputBase-root': {
                        borderRadius: '20px', // More rounded edges for base input
                    },
                    '& .MuiInput-underline:before, & .MuiInput-underline:after':
                        {
                            borderBottom: 'none', // Remove underline
                        },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '20px', // More rounded edges for outlined inputs
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#86BC25', // Change focus frame color
                    },
                    '&.Mui-focused': {
                        boxShadow: 'none', // Remove focus shadow
                    },
                },
                notchedOutline: {
                    borderRadius: '20px', // Rounded outline
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: '20px', // More rounded edges for base inputs
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    borderRadius: '20px', // More rounded edges for select fields
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#86BC25', // Change focus frame color
                    },
                    '&.Mui-focused': {
                        boxShadow: 'none', // Remove focus shadow
                    },
                },
                outlined: {
                    borderRadius: '20px', // Rounded outline for select
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    borderRadius: '20px', // More rounded edges for input fields
                    '&:before, &:after': {
                        borderBottom: 'none', // Remove underline
                    },
                },
            },
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderRadius: '20px', // More rounded edges for filled input fields
                    '&:before, &:after': {
                        borderBottom: 'none', // Remove underline
                    },
                },
            },
        },
    },
});

export default theme;
