import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled, useTheme } from '@mui/material/styles';
import { StyledInputLabel } from 'components/base/InputField';
import * as React from 'react';
import { useController } from 'react-hook-form';
import countryList from 'react-select-country-list';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const CustomSelect = styled(Select)(({ theme }) => ({
    marginTop: 0,
    color: 'white',
    '& .MuiOutlinedInput-root:hover': {
        '& > fieldset': {
            borderColor: `${theme.palette.primary}`,
        },
    },
    '& .MuiOutlinedInput-root.Mui-focused': {
        '& > fieldset': {
            borderColor: `${theme.palette.primary}`,
        },
    },
    '& .MuiSelect-select': {
        borderRadius: 10,
        borderColor: `white`,
        color: 'white',
        height: 48,
        padding: '9px',
        backgroundColor: 'rgba(18, 24, 52, 0.5)',
    },
}));

const SelectFieldStyle = {
    padding: 7,
    fontSize: '0.75rem',
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
}

export default function MultipleNationalSelect({ control }) {
    const {
        field: { value, onChange, onBlur, ref, getFieldState },
        fieldState: { invalid, error },
    } = useController({
        name: 'nationality',
        control,
    });

    const theme = useTheme();
    const [personName, setPersonName] = React.useState(value);
    const options = React.useMemo(() => countryList().getData(), []);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        setPersonName(value);
        onChange(value);
    };

    return (
        <div>
            <StyledInputLabel shrink htmlFor="bootstrap-input">
                Nationality
            </StyledInputLabel>
            <FormControl sx={{ width: 300 }}>
                <CustomSelect
                    size="medium"
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={personName}
                    onChange={handleChange}
                    MenuProps={MenuProps}
                    InputLabelProps={{ shrink: false }}
                    SelectProps={{
                        style: SelectFieldStyle,
                    }}
                >
                    {options.map(({ value, label }) => (
                        <MenuItem key={label} value={label} style={getStyles(label, personName, theme)}>
                            {label}
                        </MenuItem>
                    ))}
                </CustomSelect>
            </FormControl>
        </div>
    );
}
