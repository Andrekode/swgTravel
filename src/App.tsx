import React, { useState, useEffect } from 'react';
import travelStore from './stores/travelStore';
import { observer } from 'mobx-react';
import { Box, TextField, Typography, Grid } from '@mui/material';
import TravelAvailable from './components/TravelAvailable';
import CheckboxLabels from './components/CheckBoxLabel';

function App() {
    useEffect(() => {
        travelStore.getTravels();
    }, []);

    const test = travelStore.travelsAvailable.map((travels, i) => {
        return (
            <Grid item xs={8} md={3} key={i}>
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

    return (
        <Box component='div' p={2}>
            <TextField
                id='outlined-basic'
                label='Current Planet'
                variant='outlined'
                onChange={(e) => travelStore.handleSearch(e)}
                value={travelStore.searchString}
                name='searchString'
            />
            <CheckboxLabels
                isTravelsLocal={travelStore.isTravelsLocal}
                setIsTravelLocal={() => travelStore.setIsTravelLocal()}
            />
            <Typography component='p'>{travelStore.travelsAvailable.length}</Typography>
            <Grid container spacing={1} justifyContent='center'>
                {test}
            </Grid>
        </Box>
    );
}

export default observer(App);
