import React from 'react';
import {SearchResultsInformationSnackbar} from './SearchResultsInformationSnackbar';
import {Pagination} from './Pagination';
import FiltersVisibilityToggler from './FiltersVisibilityToggler';
import GenericLinkButton from './GenericLink';
import {withRouter} from "react-router";
import Header from './Header';
import BooksTableFilter from './BooksTableFilter';
import BooksTableBody from './BooksTableBody';
import Grow from '@material-ui/core/Grow';
import { shallowEqual, useSelector } from 'react-redux'

let UnconnectedBooks = () =>{
   
  const isThereSomethingToDisplay = useSelector( state =>state.books?.currentPageBooksData?.length? true:false, shallowEqual)
  const [open, setOpen] = React.useState(true);
  const handleClose =()=>{setOpen(false);}
  
return(
  isThereSomethingToDisplay?
    <div className ='table__container'>
      <div className ='books__buttons'>
        <GenericLinkButton label ='Wyszukiwanie' link ='/search' />
        <Pagination />
        <FiltersVisibilityToggler />
      </div>
       <SearchResultsInformationSnackbar open={open} handleClose={handleClose} />
       <Grow in={true} timeout ={1000}>
      <table className = 'table'>
        <thead className = 'table__header'>
          <Header />
          <BooksTableFilter />
        </thead>
        <BooksTableBody />
      </table>
      </Grow>
    </div>:null)}

const Books = withRouter(React.memo(UnconnectedBooks));
export default Books;
