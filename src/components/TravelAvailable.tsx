import React from 'react';
import { styled } from '@mui/material/styles';
import { Stack, Box, Paper, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

interface TravelAvailableProps {
    alias: string;
    command: string;
    currentPlanet: string;
    nextPlanet: string;
    starport: string;
    starport2: string;
}

export default function TravelAvailable(props: TravelAvailableProps) {
    const { alias, command, currentPlanet, nextPlanet, starport, starport2 } = props;
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <Item>
                    <Typography component='p'>Current planet: {currentPlanet}</Typography>
                    <Typography component='p'>Current starport: {starport}</Typography>
                    <Typography component='p'>Next available planet {nextPlanet}</Typography>
                    <Typography component='p'>Next starport: {starport2}</Typography>
                    <Typography component='p'>Alias {alias}</Typography>
                </Item>
            </Stack>
        </Box>
    );
}
