import * as React from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { CustomContainer } from './CustomContainer';
import CircularProgress from '@material-ui/core/CircularProgress';

const ColorCircularProgress = withStyles({
    root: {
      color: 'rgba(122, 194, 33, 0.8);',
    },
  })(CircularProgress);
  
let Spinner = React.memo(()=> {
return <CustomContainer><ColorCircularProgress thickness ={5} size ={100} /></CustomContainer>
})

Spinner = withRouter(Spinner);
export default Spinner;

