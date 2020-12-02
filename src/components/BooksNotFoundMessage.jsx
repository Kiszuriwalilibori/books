import React from "react";
import { withRouter } from "react-router";
import { CustomContainer } from "./common/CustomContainer";
import { CustomBox } from "./common/CustomBox";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Link to="/search" style={{ textDecoration: "none" }}>
    <CustomContainer>
      <CustomBox>
        <span className="notfound__item">Nie znaleziono książek spełniających zadane kryteria</span>
        <br />
        <span className="notfound__item">Kliknij gdziekolwiek, aby powrócić do wyszukiwania</span>
      </CustomBox>
    </CustomContainer>
  </Link>
);

const BooksNotFoundMessage = withRouter(React.memo(NotFound));

export default BooksNotFoundMessage;
