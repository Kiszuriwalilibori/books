import { RemoveItemWarning } from "pages/BooksPage/components";
import { Modal } from "components";
import { useRemoveBookModalVisibilityContext } from "contexts";

const WithRemoveItemWarningHOC = ({ children }: { children: JSX.Element }): JSX.Element => {
    const { isRemoveBookModalVisible } = useRemoveBookModalVisibilityContext();
    return (
        <>
            {children}
            <Modal isOpen={isRemoveBookModalVisible} label={"remove warning modal"} content={<RemoveItemWarning />} />
        </>
    );
};

export default WithRemoveItemWarningHOC;
