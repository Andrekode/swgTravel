import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface CheckBoxProps {
    isTravelsLocal: boolean;
    setIsTravelLocal: () => void;
}
export default function CheckboxLabels(props: CheckBoxProps) {
    const { isTravelsLocal, setIsTravelLocal } = props;
    return (
        <FormGroup>
            <FormControlLabel
                control={<Checkbox onChange={setIsTravelLocal} checked={isTravelsLocal} />}
                label='Travel current planet ?'
            />
        </FormGroup>
    );
}
