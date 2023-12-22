import { RemoveItemWarning } from "pages/BooksPage/components";

const WithRemoveItemWarningHOC = ({ children }: { children: JSX.Element }): JSX.Element => {
    return (
        <>
            {children}
            <RemoveItemWarning />
        </>
    );
};

export default WithRemoveItemWarningHOC;
