import * as React from "react";
import debounce from "lodash/debounce";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Pagination from "./Pagination";
import FiltersVisibilityToggler from "./FiltersVisibilityToggler";
import LinkButton from "./LinkButton";
import Paths from "Routing/Paths";

import { useDispatchAction } from "hooks";
import { Button } from "components";

import { getIsPreviousButtonVisible, getIsNextButtonVisible } from "js/redux/selectors";

export const NavigationFactory = () => {
    const isPreviousButtonVisible = useSelector(getIsPreviousButtonVisible);
    const isNextButtonVisible = useSelector(getIsNextButtonVisible);
    const { showPreviousDetails, showNextDetails } = useDispatchAction();
    const location = useLocation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const requirePreviousBook: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(
        debounce(() => showPreviousDetails(), 200),
        [showPreviousDetails]
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const requireNextBook: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(
        debounce(() => showNextDetails(), 200),
        [showNextDetails]
    );

    switch (location.pathname) {
        case Paths.books:
            return (
                <nav className="books__buttons navigation-factory__item">
                    <LinkButton label="Wyszukiwanie" link={Paths.search} />
                    <Pagination />
                    <FiltersVisibilityToggler />
                </nav>
            );

        case Paths.individualBook:
            return (
                <nav className="books__buttons navigation-factory__item">
                    <Button disabled={!isPreviousButtonVisible} onClick={requirePreviousBook} className="button--problem" children={"<<<"} />
                    <LinkButton link={Paths.books} label="Znalezione książki" />
                    <LinkButton link={Paths.search} label="Wyszukiwanie" />
                    <Button disabled={!isNextButtonVisible} onClick={requireNextBook} className="button--problem" children={">>>"} />
                </nav>
            );

        default:
            return null;
    }
};

export default NavigationFactory;
