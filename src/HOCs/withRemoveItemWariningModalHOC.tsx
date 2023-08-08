import * as React from "react";

import { RemoveItemWarningModal } from "../Pages/Books/components";

function withRemoveItemWarningModalHOC<T>(Component: React.ComponentType<T>) {
    return (props: React.PropsWithChildren<T>) => (
        <>
            <Component {...props} />
            <RemoveItemWarningModal />
        </>
    );
}

export default withRemoveItemWarningModalHOC;
