import React from 'react';
import { styled } from '@mui/material/styles';
import {
    Stack,
    Box,
    Paper,
    Typography,
    Card,
    CardActions,
    CardContent,
    Button,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

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

    const card = (
        <React.Fragment>
            <CardContent sx={{ backgroundColor: '#7e7863' }}>
                <Stack justifyContent='center' alignItems='stretch' spacing={2} direction='row'>
                    <Item sx={{ backgroundColor: '#2e557c' }}>
                        <Typography sx={{ fontSize: 14 }} color='common.white' gutterBottom>
                            Current Planet:
                        </Typography>
                        <Typography variant='h5' color='common.white'>
                            {capitalizeFirstLetter(currentPlanet)}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='common.white'>
                            {starport.replaceAll('_', ' ')}
                        </Typography>
                    </Item>
                    <Stack spacing={2}>
                        <Item>
                            <ArrowRightAltIcon fontSize='large' />
                        </Item>
                        <Item>
                            <Stack>
                                <Box>Alias</Box>
                                <Box>{alias}</Box>
                            </Stack>
                        </Item>
                    </Stack>
                    <Item sx={{ backgroundColor: '#2e557c' }}>
                        <Typography sx={{ fontSize: 14 }} color='common.white' gutterBottom>
                            Next Available Planet:
                        </Typography>
                        <Typography variant='h5' color='common.white'>
                            {capitalizeFirstLetter(nextPlanet)}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='common.white'>
                            {starport2.replaceAll('_', ' ')}
                        </Typography>
                    </Item>
                </Stack>
                <Typography sx={{ fontSize: 14 }} color='common.white' gutterBottom>
                    Command:
                </Typography>
                <Typography variant='body2' sx={{ fontSize: 12 }}>
                    {command}
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    return (
        <Box sx={{ minWidth: 100 }}>
            <Card variant='outlined'>{card}</Card>
        </Box>
    );
}
