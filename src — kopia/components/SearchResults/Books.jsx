import React from "react";
import { Pagination } from "./Pagination";
import FiltersVisibilityToggler from "./FiltersVisibilityToggler";
import GenericLinkButton from "./GenericLink";
import { withRouter } from "react-router";
import Header from "./Header";
import BooksTableFilter from "./BooksTableFilter";
import BooksTableBody from "./BooksTableBody";
import Grow from "@material-ui/core/Grow";
import MySnackBar from "./SnackBar";

let UnconnectedBooks = () => {
  return (
    <div className="table__container">
      <div className="books__buttons">
        <GenericLinkButton label="Wyszukiwanie" link="/search" />
        <Pagination />
        <FiltersVisibilityToggler />
      </div>
      <MySnackBar />
      <Grow in={true} timeout={1000}>
        <table className="table">
          <thead className="table__header">
            <Header />
            <BooksTableFilter />
          </thead>
          <BooksTableBody />
        </table>
      </Grow>
    </div>
  );
};

const Books = withRouter(React.memo(UnconnectedBooks));
export default Books;
