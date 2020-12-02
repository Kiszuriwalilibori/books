import InfoIcon from '@material-ui/icons/Info';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import {fetchSingleBook} from '../../redux/detailsReducer';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MyTooltip from '../common/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import debounce from "lodash/debounce";
import {useCallback} from 'react';

const iconColor ='#0C66CC';
const iconHoverColor ='rgba(37, 94, 155,0.34)'
const MyIconButton = withStyles({
  root: {
    color: iconColor,
    transition: "background-color 0.5s ease-in-out",
    "&:hover":{backgroundColor: iconHoverColor,}
  },
  
})(IconButton);


const MyMoreInfo = withStyles({
  root: {
    color: iconColor,
    cursor: 'pointer',
   
  },
})(InfoIcon);


const UnconnectedFullInfoButton = (props)=>{

const {id,fetchSingleBook} = props;
const history = useHistory();

const redirect = React.useMemo(
  () => ({
    not_found: () => {
      history.push("/not_found");
    },
    error: () => {
      history.push("/error");
    },
    data: () => {
      history.push("/results");
    },
    connecting: () => {
      history.push("/connecting");
    },
    singleBook: ()=>{
      history.push("/single_book");
    },
    search: () => {
      history.push("/");
    },
  }),
  [history]
);

const debouncedFetchSingleBook = useCallback(debounce(()=>fetchSingleBook(redirect, id),200),[])


return<MyTooltip title ="Pokazuje pełne informacje o książce w osobnym ekranie">
        <MyIconButton role= 'button' onClick ={debouncedFetchSingleBook}  >
          <MyMoreInfo >
          </MyMoreInfo>
        </MyIconButton>
      </MyTooltip>;
}

const mapDispatchToProps = (dispatch) => ({
  fetchSingleBook: (a,b) => dispatch(fetchSingleBook(a,b)),
})

const FullInfoButton = connect(null, mapDispatchToProps)(UnconnectedFullInfoButton);
export default FullInfoButton;

UnconnectedFullInfoButton.propTypes ={
  item:PropTypes.string
}
