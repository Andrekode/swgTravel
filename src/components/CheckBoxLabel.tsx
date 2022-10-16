import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface CheckBoxProps {
    isLocalTravel: boolean;
    setIsLocalTravel: () => void;
}
export default function CheckboxLabels(props: CheckBoxProps) {
    const { isLocalTravel, setIsLocalTravel } = props;
    return (
        <FormGroup>
            <FormControlLabel
                control={<Checkbox onChange={setIsLocalTravel} checked={isLocalTravel} />}
                label='Travel current planet ?'
            />
        </FormGroup>
    );
}
