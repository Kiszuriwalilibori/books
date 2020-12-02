import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MyTooltip from '../common/Tooltip';

const iconColor ='#F70000';
const iconHoverColor ='rgba(247,0,0,0.34)';
const MyDelete = withStyles({
  root: {
    color: iconColor,
    cursor: 'pointer',
      
  },
})(HighlightOffIcon);

const MyIconButton = withStyles({
  root: {
    color: iconColor,
    transition: "background-color 0.5s ease-in-out",
    "&:hover":{backgroundColor: iconHoverColor,}
  },
  
})(IconButton);

const RemoveButton = (props)=>{

const {item} = props;
return <MyTooltip title ="Usuwa element zarówno z widoku jak i pobranej partii danych">
  <MyIconButton aria-label="delete" itemProp ='delete-button' data-content ={JSON.stringify(item)} >
  <MyDelete></MyDelete>
  </MyIconButton>
  </MyTooltip>;
}

export default RemoveButton;
