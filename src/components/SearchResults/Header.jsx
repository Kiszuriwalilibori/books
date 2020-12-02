import React from 'react';
import {useDispatch} from 'react-redux'
import {headers} from '../../fixtures/fixtures';
import {connect} from 'react-redux';
import MyTooltip from '../common/Tooltip';
import PropTypes from 'prop-types';

export const getCellClass = (index) => {return (index ===0 ||index ===1)? 'header__cell-large' : 'header__cell-small';}

let Header = (props)=> {
const dispatch = useDispatch()
const {sortColumn, isSortOrderDescending} = props;
let throttledSort=(e) =>dispatch({type:'THROTTLED_SORT', payload:e.target.cellIndex});
    return (
      <tr onClick={throttledSort}> 
        {headers.map((item, index) => (<MyTooltip title ='Kliknij, aby posortować' key={item} placement ='top-start'>
          <th className ={`header__cell ${getCellClass(index)}`}>
          { sortColumn === index ? ' ' + item + (isSortOrderDescending ? ' \u2191' : ' \u2193')+' ' :' ' + item +' ' }
          </th></MyTooltip>
        ))}
      </tr>
    );
  }

const mapStateToProps = (state) => ({
    sortColumn: state.books.currentSortColumn,
    isSortOrderDescending: state.books.isSortOrderDescending,
});

Header = connect(mapStateToProps, null)(Header)

export default Header;

Header.propTypes = {
  
  sortColumn: PropTypes.number,
  isSortDescending: PropTypes.bool,
  
};