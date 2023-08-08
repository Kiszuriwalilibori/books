import * as React from "react";

import { MessageSnackBar } from "components";

function withSnackBarHOC<T>(Component: React.ComponentType<T>) {
    return (props: React.PropsWithChildren<T>) => (
        <>
            <MessageSnackBar />
            <Component {...props} />
        </>
    );
}

export default withSnackBarHOC;
