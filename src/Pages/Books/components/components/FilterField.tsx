import { withStyles } from '@mui/styles';
import { TextField } from '@mui/material';

const FilterField = withStyles({
    root: {
        caretColor: 'black',
        backgroundColor: '#FFDD40',
        '& input': { color: 'black' },
        '& .MuiFormLabel-root': { display: 'none' },
        '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #FFDD40',
            borderColor: '#FFDD40 !important',
        },
        '& label': {
            fontSize: '11px',
            maxWidth: '90%',
            whiteSpace: 'normal',

            '@media only screen and (max-width: 640px)': {
                fontSize: 'calc(8px + 3 * ((100vw - 320px) / 320))',
            },
        },
    },
})(TextField);

export default FilterField;
