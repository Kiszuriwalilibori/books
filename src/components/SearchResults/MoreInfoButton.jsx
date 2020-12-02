import InfoIcon from '@material-ui/icons/Info';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import showDetailedInfo from '../../js/showDetailedInfo';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MyTooltip from '../common/Tooltip';
import IconButton from '@material-ui/core/IconButton';

const iconColor ='#7ac221';
const iconHoverColor ='rgba(122,194,33,0.34)'
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

const MoreInfoButton = (props)=>{
const {item} = props;
const history = useHistory();

const redirect ={
not_found: ()=>{history.push('/not_found')},
error:()=>{history.push('/error')},
books: ()=>{history.push('/books')},
connecting:()=>{history.push('/connecting')}
}

const showMoreInfo = ()=> showDetailedInfo(item, redirect);

return<MyTooltip title ="Przenosi na stronę umożliwiająca zakup">
        <MyIconButton role= 'button' onClick ={showMoreInfo}  >
          <MyMoreInfo >
          </MyMoreInfo>
        </MyIconButton>
      </MyTooltip>;
}

export default MoreInfoButton;

MoreInfoButton.propTypes ={
  item:PropTypes.array
}
