import { TableContainer } from "./withTableContainerHOC.styles";
import * as React from "react";

function withTableContainerHOC<T>(Component: React.ComponentType<T>) {
    return (props: React.PropsWithChildren<T>) => (
        <TableContainer>
            <Component {...props} />
        </TableContainer>
    );
}

export default withTableContainerHOC;
