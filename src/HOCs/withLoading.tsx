import { LoadingIndicator } from "components";

export function WithLoadingIndicatorHOC({ children }: { children: JSX.Element }) {
    return (
        <>
            <LoadingIndicator />
            {children}
        </>
    );
}

export default WithLoadingIndicatorHOC;
