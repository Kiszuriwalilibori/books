import * as React from "react";
import debounce from "lodash/debounce";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Pagination from "./Pagination";
import FiltersVisibilityToggler from "./FiltersVisibilityToggler";
import LinkButton from "./LinkButton";
import Paths from "routing";

import { useDispatchAction } from "hooks";
import { Button } from "components";

import { NavigationContainer } from "pages/styled";
import { previousButtonVisibleSelector, nextButtonVisibleSelector } from "store/selectors";

/**
 * NavigationFactory is a navigation component that renders context-aware navigation controls
 * for different pages (e.g., books page, details page) in the Google Books Finder app.
 * It provides pagination, previous/next navigation, filter toggling, and quick navigation buttons.
 * Uses Redux selectors to determine button visibility and dispatches navigation actions.
 */
export const NavigationFactory = () => {
    const isPreviousButtonVisible = useSelector(previousButtonVisibleSelector);
    const isNextButtonVisible = useSelector(nextButtonVisibleSelector);
    const { showPreviousDetails, showNextDetails } = useDispatchAction();
    const location = useLocation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleShowPreviousBook: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(
        debounce(() => showPreviousDetails(), 200),
        [showPreviousDetails]
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleShowNextBook: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(
        debounce(() => showNextDetails(), 200),
        [showNextDetails]
    );

    switch (location.pathname) {
        case Paths.books:
            return (
                <NavigationContainer aria-label="navigation from books page">
                    <LinkButton label="Wyszukiwanie" link={Paths.search} />
                    <Pagination />
                    <FiltersVisibilityToggler />
                </NavigationContainer>
            );

        case Paths.details:
            return (
                <NavigationContainer aria-label="navigation for single book page">
                    <Button disabled={!isPreviousButtonVisible} onClick={handleShowPreviousBook} className="button--problem" children={"<<<"} />
                    <LinkButton link={Paths.books} label="Znalezione książki" />
                    <LinkButton link={Paths.search} label="Wyszukiwanie" />
                    <Button disabled={!isNextButtonVisible} onClick={handleShowNextBook} className="button--problem" children={">>>"} />
                </NavigationContainer>
            );

        default:
            return null;
    }
};

export default NavigationFactory;
