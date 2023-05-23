import React, { useState } from 'react';
import bgtravel from '../assets/bgtravel.jpg';
import { Paper, Box, Stack, FormControl, InputLabel, MenuItem, Button } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { observer } from 'mobx-react';
import planets from '../assets/planets2';
import planetTravelStore from '@/stores/planetTravelStore';

const Travel = () => {
    const [startPlanetName, setStartPlanetName] = useState('');
    const [endPlanetName, setEndStartPlanetName] = useState('');

    const handleStartPlanetChange = (event) => {
        const startPlanetName = event.target.value;
        setStartPlanetName(startPlanetName);
        planetTravelStore.setStartPlanet(startPlanetName);
    };

    const handleEndPlanetChange = (event) => {
        const endPlanetName = event.target.value;
        setEndStartPlanetName(endPlanetName);
        planetTravelStore.setEndPlanet(endPlanetName);
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${bgtravel})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                minHeight: '100vh',
            }}
        >
            <Paper
                variant='outlined'
                square
                sx={{
                    p: 2,
                    width: '100%',
                    minHeight: '100vh',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                }}
            >
                <Box
                    sx={{
                        position: 'sticky',
                        top: '100px',
                    }}
                >
                    <Stack direction='row' spacing={2} sx={{ mb: 2, width: 500 }}>
                        <FormControl fullWidth>
                            <InputLabel id='current-location-select-label'>
                                Current Location
                            </InputLabel>
                            <Select
                                labelId='current-location-select-label'
                                id='current-location-select'
                                label='Current Location'
                                value={startPlanetName}
                                onChange={handleStartPlanetChange}
                            >
                                {[...planets.keys()].map((planet) => (
                                    <MenuItem key={planet} value={planet}>
                                        {planet}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id='current-location-travel-point-select-label'>
                                End Location
                            </InputLabel>
                            <Select
                                labelId='end-location-label'
                                id='end-location-select'
                                label='End Location'
                                value={endPlanetName}
                                onChange={handleEndPlanetChange}
                            >
                                {[...planets.keys()].map((planet) => (
                                    <MenuItem key={planet} value={planet}>
                                        {planet}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button onClick={() => planetTravelStore.findShortesPath()}>Go</Button>
                    </Stack>
                    <h2>{planetTravelStore.travelPoints}</h2>
                </Box>
                <Box
                    sx={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 2,
                        width: '500px',
                        height: '500px',
                    }}
                ></Box>
            </Paper>
        </Box>
    );
};
export default observer(Travel);
