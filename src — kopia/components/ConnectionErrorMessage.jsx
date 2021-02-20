import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { CustomContainer } from "./common/CustomContainer";
import { CustomBox } from "./common/CustomBox";
import { Link } from "react-router-dom";

const unconnectedError = ({ errorMessage }) => (
  <Link to="/search" style={{ textDecoration: "none" }}>
    <CustomContainer>
      <CustomBox>
        <span className="notfound__item">Podczas próby połączenia z serwerem danych wystąpił błąd:</span>
        <br />
        <span className="notfound__item">{errorMessage}</span>
      </CustomBox>
    </CustomContainer>
  </Link>
);

const mapStateToProps = (state) => ({
  errorMessage: state.books.errorMessage,
});

const ConnectionErrorMessage = withRouter(connect(mapStateToProps, null)(unconnectedError));

export default ConnectionErrorMessage;
