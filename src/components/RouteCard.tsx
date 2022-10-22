import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const RouteCard = (props) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Box
                    sx={{
                        p: 2,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr 1fr 1fr' },
                        gap: 2,
                    }}
                >
                    <Item>planet1</Item>
                    <Item>planet1</Item>
                    <Item>planet1</Item>
                    <Item>planet1</Item>
                    <Item>planet1</Item>
                    <Item>planet1</Item>
                </Box>
            </Grid>
        </Grid>
    );
};

export default RouteCard;
