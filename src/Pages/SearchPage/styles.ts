import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',

        '& .MuiTextField-root': {
            margin: '8px',
            width: '25ch',
            boxShadow:
                '0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16),0 8px 8px rgba(0,0,0,0.20);',
        },
        '& .MuiInputBase-root': {
            color: 'white !important',
            fontFamily: 'Open Sans, sans-serif !important',
            backgroundColor: 'rgba(122, 194, 33, 0.8)',
        },
        '& .MuiFormLabel-root': { color: 'white !important', fontFamily: 'Montserrat' },
        '& .MuiOutlinedInput-notchedOutline': {
            border: '3px solid',
            borderColor: 'rgb(122, 194, 33)!important',
        },
    },
}));

export default useStyles;
