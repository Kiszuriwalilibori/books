import { RemoveBookModal } from "pages/BooksPage/components";

const WithRemoveBookModalHOC = ({ children }: { children: JSX.Element }): JSX.Element => {
    return (
        <>
            {children}
            <RemoveBookModal />
        </>
    );
};

export default WithRemoveBookModalHOC;
