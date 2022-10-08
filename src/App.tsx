import React, { useState, useEffect } from 'react';
import travelStore from './stores/travelStore';
import { observer } from 'mobx-react';
import { TextField, Typography } from '@mui/material';
import TravelsAvailable from './components/TravelAvailable';

function App() {
    useEffect(() => {
        travelStore.getTravels();
    }, []);

    const test = travelStore.travelsAvailable.map((travels, i) => {
        return (
            <TravelsAvailable
                key={i}
                alias={travels.alias}
                command={travels.command}
                currentPlanet={travels.currentPlanet}
                nextPlanet={travels.nextPlanet}
                starport={travels.starport}
                starport2={travels.starport2}
            />
        );
    });

    return (
        <div className='App'>
            <TextField
                id='outlined-basic'
                label='Current Planet'
                variant='outlined'
                onChange={(e) => travelStore.handleSearch(e)}
                value={travelStore.searchString}
                name='searchString'
            />
            <Typography component='p'>{travelStore.travelsAvailable.length}</Typography>
            {test}
        </div>
    );
}

export default observer(App);
