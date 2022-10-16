import React, { useState, useEffect } from 'react';
import bgtravel from '../assets/bgtravel.jpg';
import { Grid, Paper, Box, Stack, FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import travelStore from '../stores/travelStore';
import { observer } from 'mobx-react';

const Travel = () => {
    const [destination, setDestination] = useState('');
    const [currentLocation, setCurrentLocation] = useState('');
    const [destinationTravelPoint, setDestinationTravelPoint] = useState('');
    const [currentLocationTravelPoint, setCurrentLocationTravelPoint] = useState('');

    useEffect(() => {
        travelStore.getPlanets();
    }, []);

    useEffect(() => {
        travelStore.getCurrentLocationTravelPoints(currentLocation);
        setCurrentLocationTravelPoint(travelStore.currentLocationTravelPoints[0].name);
    }, [currentLocation]);

    useEffect(() => {
        travelStore.getDestinationTravelPoints(destination);
        setDestinationTravelPoint(travelStore.destinationTravelPoints[0].name);
    }, [destination]);

    useEffect(() => {
        travelStore.getTravelRoute(
            currentLocation,
            currentLocationTravelPoint,
            destination,
            destinationTravelPoint,
        );
    }, [currentLocation, currentLocationTravelPoint, destination, destinationTravelPoint]);
    const handleSelectDestination = (event: SelectChangeEvent) => {
        setDestination(event.target.value as string);
    };

    const handleSelectCurrentLocation = (event: SelectChangeEvent) => {
        setCurrentLocation(event.target.value as string);
    };

    const handleSelectDestinationTravelPoint = (event: SelectChangeEvent) => {
        setDestinationTravelPoint(event.target.value as string);
    };

    const handleSelectCurrentLocationTravelPoint = (event: SelectChangeEvent) => {
        setCurrentLocationTravelPoint(event.target.value as string);
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
                    opacity: 0.8,
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
                                value={currentLocation}
                                onChange={handleSelectCurrentLocation}
                            >
                                {travelStore.planetNames.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id='current-location-travel-point-select-label'>
                                Current Travel Point
                            </InputLabel>
                            <Select
                                labelId='current-location-travel-point-select-label'
                                id='current-location-travel-point-select'
                                label='Current Travel Point'
                                value={currentLocationTravelPoint}
                                onChange={handleSelectCurrentLocationTravelPoint}
                            >
                                {travelStore.currentLocationTravelPoints.map((travelPoint) => (
                                    <MenuItem key={travelPoint.name} value={travelPoint.name}>
                                        {travelPoint.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Stack>
                    <Stack direction='row' spacing={2} sx={{ width: 500 }}>
                        <FormControl fullWidth>
                            <InputLabel id='planet-destination-select-label'>
                                Destination
                            </InputLabel>
                            <Select
                                labelId='planet-destination-select-label'
                                id='planet-destination-select'
                                label='Destination'
                                value={destination}
                                onChange={handleSelectDestination}
                            >
                                {travelStore.planetNames.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id='planet-destination-travel-point-select-label'>
                                Destination Travel Point
                            </InputLabel>
                            <Select
                                labelId='planet-destination-travel-point-select-label'
                                id='planet-destination-travel-point-select'
                                label='Destination Travel Point'
                                value={destinationTravelPoint}
                                onChange={handleSelectDestinationTravelPoint}
                            >
                                {travelStore.destinationTravelPoints.map((travelPoint) => (
                                    <MenuItem key={travelPoint.name} value={travelPoint.name}>
                                        {travelPoint.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Stack>
                </Box>
            </Paper>
        </Box>
    );
};
export default observer(Travel);
