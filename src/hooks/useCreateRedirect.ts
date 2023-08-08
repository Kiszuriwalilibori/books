import React from "react";

import { useNavigate } from "react-router-dom";

import { createRedirect } from "js/utils";

function useCreateRedirect() {
    const history = useNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const redirect = React.useMemo(createRedirect(history), []);
    return redirect;
}

export default useCreateRedirect;
