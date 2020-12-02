import *as React from 'react';
import { shallowEqual, useSelector } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar';
import {Alert} from '@material-ui/lab';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const MyAlert = withStyles({
  root: {
    background: 'rgba(122, 194, 33, 0.8);',
    color: 'white',
    border: '1px solid #298B01',
    boxShadow: 'inset 0 0 5px #298B01',
  },
})(Alert);

// export const SearchResultsInformationSnackbar =(props) =>{

//   const {open, handleClose, text} = props;
    
// return(
// <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
//         <MyAlert  severity="success" variant="filled" >
//           Poprawnie pobrano dane, łącznie znaleziono {text} książek
//         </MyAlert>
// </Snackbar>)}

// SearchResultsInformationSnackbar.propTypes ={
//   text:PropTypes.number,
//   open:PropTypes.bool,
//   handleClose: PropTypes.func
// }


export const SearchResultsInformationSnackbar =(props) =>{
const {open, handleClose} = props;
const books = useSelector(state=>state.books.books, shallowEqual);  
let length =   books? books.length: 0;
return(
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
        <MyAlert  severity="success" variant="filled" >
          Poprawnie pobrano dane, łącznie znaleziono {length} książek
        </MyAlert>
</Snackbar>)}

SearchResultsInformationSnackbar.propTypes ={
  open:PropTypes.bool,
  handleClose: PropTypes.func
}

