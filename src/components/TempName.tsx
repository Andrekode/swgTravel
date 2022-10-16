import { useState, useEffect } from 'react';
import travelStore from './stores/travelStore';
import { observer } from 'mobx-react';

import {
    Box,
    TextField,
    Typography,
    Grid,
    FormControl,
    InputLabel,
    MenuItem,
    Stack,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TravelAvailable from './components/TravelAvailable';
import CheckboxLabels from './components/CheckBoxLabel';
import capitalizeFirstLetter from './utils/capitalizeFirstLetter';
export default function TravelComp() {

    const [destination, setDestination] = useState<string>('');
    const [currentLocation, setCurrentLocation] = useState<string>('');
    const [isLocalTravel, setIsLocalTravel] = useState<boolean>(false);

    useEffect(() => {
        travelStore.getQuickTravels(currentLocation, destination, isLocalTravel);
        console.log(travelStore.quickTravel);
        console.log('currentlocation:', currentLocation);
        console.log('destination:', destination);
    }, [destination, currentLocation, isLocalTravel]);

    const test = travelStore.quickTravel.map((travels) => {
        return (
            <Grid item xs={8} md={3} key={travels.id}>
                <TravelAvailable
                    alias={travels.alias}
                    command={travels.command}
                    currentPlanet={travels.currentPlanet}
                    nextPlanet={travels.nextPlanet}
                    starport={travels.starport}
                    starport2={travels.starport2}
                />
            </Grid>
        );
    });

    // const currentTravelRoutes = travelStore.travelRoute.map((routes) => {
    //     return (
    //         <Grid item xs={8} md={4} key={routes.id}>
    //             <TravelAvailable
    //                 alias={routes.alias}
    //                 command={routes.command}
    //                 currentPlanet={routes.currentPlanet}
    //                 nextPlanet={routes.nextPlanet}
    //                 starport={routes.starport}
    //                 starport2={routes.starport2}
    //                 handleClick={() => handleClick(routes.id)}
    //             />
    //         </Grid>
    //     );
    // });

    const allPlanets = travelStore.allAvailablePlanets.map((planets) => {
        return (
            <MenuItem key={planets} value={planets}>
                {capitalizeFirstLetter(planets)}
            </MenuItem>
        );
    });

    // const handleClick = (id: string) => {
    //     travelStore.travelsAvailableCurrentPlanet.map((planet) => {
    //         if (planet.id === id) {
    //             travelStore.setNextPlanet(planet.nextPlanet);
    //             travelStore.setTravelRoute(planet);
    //         }
    //     });
    //     travelStore.setCurrentPlanetToNextPlanet();
    //
    // };
    const handleTraveLocal = () => {
        setIsLocalTravel((prevBool) => !prevBool);
    };

    const handleSelectDestination = (event: SelectChangeEvent) => {
        setDestination(event.target.value as string);
    };

    const handleSelectCurrentLocation = (event: SelectChangeEvent) => {
        setCurrentLocation(event.target.value as string);
    };

    return (
        <Box component='div' p={2}>
            <Stack direction='row' spacing={2}>
                <FormControl fullWidth>
                    <InputLabel id='current-location-select-label'>Current Location</InputLabel>
                    <Select
                        labelId='current-location-select-label'
                        id='current-location-select'
                        value={currentLocation}
                        label='Current Location'
                        onChange={handleSelectCurrentLocation}
                    >
                        {allPlanets}
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id='planet-destination-select-label'>Destination</InputLabel>
                    <Select
                        labelId='planet-destination-select-label'
                        id='planet-destination-select'
                        value={destination}
                        label='Destination'
                        onChange={handleSelectDestination}
                    >
                        {allPlanets}
                    </Select>
                </FormControl>
                <CheckboxLabels setIsLocalTravel={handleTraveLocal} isLocalTravel={isLocalTravel} />
            </Stack>
            {test}
        </Box>
    );
}
