/** @format */

'use client';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type SimpleSelectProps = {
    id: string;
    label: string;
    value: string;
    onChange: (event: SelectChangeEvent) => void;
    selectItems: SelectItem[];
};

interface SelectItem {
    key: string;
    value: string;
}

export default function SimpleSelect({
    id,
    label,
    value,
    onChange,
    selectItems,
}: SimpleSelectProps) {
    return (
        <FormControl fullWidth variant="filled">
            <InputLabel id={`${id}-label`}>
                {label ? label : '[undefined]'}
            </InputLabel>
            <Select
                labelId={`${id}-label`}
                id={id}
                value={value}
                onChange={onChange}
                label={label}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {selectItems.map((selectItem, index) => (
                    <MenuItem key={index} value={selectItem.key}>
                        {selectItem.value}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
