import { useState, useEffect } from 'react';
import travelStore from './stores/travelStore';
import { observer } from 'mobx-react';
import { Box, TextField, Typography, Grid } from '@mui/material';
import TravelAvailable from './components/TravelAvailable';
import CheckboxLabels from './components/CheckBoxLabel';

function App(): JSX.Element {
    const [searchField, setSearchField] = useState<string>('');

    useEffect(() => {
        travelStore.getAvailableDestinationsCurrentPlanet();
    }, []);

    const test = travelStore.travelsAvailableCurrentPlanet.map((travels, i) => {
        return (
            <Grid item xs={8} md={3} key={i}>
                <TravelAvailable
                    alias={travels.alias}
                    command={travels.command}
                    currentPlanet={travels.currentPlanet}
                    nextPlanet={travels.nextPlanet}
                    starport={travels.starport}
                    starport2={travels.starport2}
                    handleClick={() => handleClick(travels.id)}
                />
            </Grid>
        );
    });

    const currentTravelRoutes = travelStore.travelRoute.map((routes) => {
        return (
            <Grid item xs={8} md={4} key={routes.id}>
                <TravelAvailable
                    alias={routes.alias}
                    command={routes.command}
                    currentPlanet={routes.currentPlanet}
                    nextPlanet={routes.nextPlanet}
                    starport={routes.starport}
                    starport2={routes.starport2}
                    handleClick={() => handleClick(routes.id)}
                />
            </Grid>
        );
    });

    const handleClick = (id: string) => {
        travelStore.travelsAvailableCurrentPlanet.map((planet) => {
            if (planet.id === id) {
                travelStore.setNextPlanet(planet.nextPlanet);
                travelStore.setTravelRoute(planet);
            }
        });
        travelStore.setCurrentPlanetToNextPlanet();
    };
    const handleChange = (e) => {
        const { value } = e.target;
        setSearchField(value);
        travelStore.search(value);
    };
    const handleTraveLocal = () => {
        travelStore.setIsTravelLocal();
        travelStore.getAvailableDestinationsCurrentPlanet();
    };

    useEffect(() => {
        travelStore.getAvailableDestinationsCurrentPlanet();
    }, [travelStore.currentPlanet]);

    return (
        <Box component='div' p={2}>
            <TextField
                id='outlined-basic'
                label='Current Planet'
                variant='outlined'
                onChange={handleChange}
                value={searchField}
            />
            <CheckboxLabels
                isTravelsLocal={travelStore.isTravelsLocal}
                setIsTravelLocal={handleTraveLocal}
            />
            <Grid container spacing={1}>
                {currentTravelRoutes}
            </Grid>
            <Typography component='p'>
                {travelStore.travelsAvailableCurrentPlanet.length}
            </Typography>
            <Grid container spacing={1} justifyContent='center'>
                {test}
            </Grid>
        </Box>
    );
}

export default observer(App);
