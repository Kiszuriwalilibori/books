import React from "react";
import { withRouter } from "react-router";
import BooksTableHeader from "./BooksTableHeader";
import BooksTableFilter from "./BooksTableFilter";
import BooksTableBody from "./BooksTableBody";
import Grow from "@material-ui/core/Grow";
import MySnackBar from "./SnackBar";
import NavigationFactory from "../SearchResults/NavigationFactory";

let UnconnectedBooks = () => {
  return (
    <div className="table__container">
      <NavigationFactory />
      <MySnackBar />
      <Grow in={true} timeout={1000}>
        <table className="table">
          <thead className="table__header">
            <BooksTableHeader />
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
