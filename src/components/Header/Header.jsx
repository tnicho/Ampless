import React from 'react';
import {Box} from '@mui/material'
import './Header.css';
import Typography from '@mui/material/Typography';

export default function Header(props) {
    return (
        <Box
        sx={{mt: '20%', mb: '5%', color: 'primary.dark'}}
        height= "auto"
        width= "auto"
        display= "flex"
        justifyContent= "center"
        alignItems="center"
        >
            <Typography variant='h1'>AMPLESS</Typography>
        </Box>
    )
}