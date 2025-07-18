import * as React from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash/debounce";

import { toggleFiltersVisibility } from "store/actionCreators";

const FiltersVisibilityToggler = (): JSX.Element => {
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleClick = React.useCallback(
        debounce(() => {
            dispatch(toggleFiltersVisibility());
        }, 200),
        [dispatch]
    );

    return (
        <button className="button button--ok button--long" onClick={handleClick}>
            Ukryj/pokaż filtry
        </button>
    );
};

export default FiltersVisibilityToggler;
