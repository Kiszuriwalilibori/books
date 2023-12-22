import * as React from "react";
import debounce from "lodash/debounce";

import { useFiltersVisibilityContext } from "contexts";

const FiltersVisibilityToggler = (): JSX.Element => {
    const { toggleFiltersVisibility } = useFiltersVisibilityContext();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleClick = React.useCallback(
        debounce(() => toggleFiltersVisibility(), 200),
        []
    );

    return (
        <button className="button button--ok button--long" onClick={handleClick}>
            Ukryj/pokaż filtry
        </button>
    );
};

export default FiltersVisibilityToggler;
