import React , { useCallback }from "react";
import { Pagination } from "./Pagination";
import FiltersVisibilityToggler from "./FiltersVisibilityToggler";
import LinkButton from "./LinkButton";
import Button from "../common/Button";
import { shallowEqual, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import debounce from "lodash/debounce";
import {paths} from "../../fixtures/fixtures";

const Factory = (props) => {

    const prevButtonVisible = useSelector(state => state.books.prevDetailedBookButtonVisible, shallowEqual);
    const nextButtonVisible = useSelector(state => state.books.nextDetailedBookButtonVisible, shallowEqual);
    const path = props.match.path;
    const dispatch = useDispatch();

    const requirePrevious = useCallback(
    debounce(() => dispatch({ type: "PREVIOUS_DETAILS_SHOW" }), 200),
    [dispatch]
  );
  const requireNext = useCallback(
    debounce(() => dispatch({ type: "NEXT_DETAILS_SHOW" }), 200),
    [dispatch]
  );

  switch (path) {
    case paths.books:
      return (
        <nav className="books__buttons">
          <LinkButton label="Wyszukiwanie" link= {paths.search} />
          <Pagination />
          <FiltersVisibilityToggler />
        </nav>
      );
    
    case paths.singleBook:
      return (
        <nav className="books__buttons">
          <Button visible={true} cls={prevButtonVisible ? "button--problem" : "button--inactive"} fn={prevButtonVisible ? requirePrevious : () => {}} text={"<<<"} />
          <LinkButton link={paths.books} label="Znalezione książki" />
          <LinkButton link={paths.search} label="Wyszukiwanie" />
          <Button visible={true} cls={nextButtonVisible ? "button--problem" : "button--inactive"} fn={nextButtonVisible ? requireNext : () => {}} text={">>>"} />
        </nav>
      );
               
    default:
      return null;
  }
};

const NavigationFactory = withRouter(Factory);
export default NavigationFactory;
