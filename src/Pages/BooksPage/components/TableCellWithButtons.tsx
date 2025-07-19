import uuid from "react-uuid";

import { useSelector } from "react-redux";
import { connect } from "react-redux";

import { canAddToFavoritesSelector } from "store/selectors";
import { RootStateType } from "types";

import { ButtonStack, TableCellWithButtonsBox } from "./TableCellWithButtons.styles";
import { GoToShopButton, RemoveBookButton, ShowBookDetailsButton, AddBookToFavoritesButton, RemoveBookFromFavoritesButton } from "./buttons";

interface Props {
    index: number;
    cellContent: string;
    bookID: string;
    isFromFavorites: RootStateType["dataSource"]["isNetwork"];
    title: string;
}

export function Cell(props: Props) {
    let { cellContent, bookID, isFromFavorites, title } = props;
    const canAddToFavorites = useSelector(canAddToFavoritesSelector);

    return (
        <td key={uuid()} role="group" aria-label={`language and options for book ${title}`}>
            <TableCellWithButtonsBox>
                <span>{cellContent}</span>
                <ButtonStack direction="row" spacing={0}>
                    <GoToShopButton bookID={bookID} />
                    <RemoveBookButton bookID={bookID} />
                    <ShowBookDetailsButton bookID={bookID} />
                    {canAddToFavorites && <AddBookToFavoritesButton bookID={bookID} />}
                    {isFromFavorites && <RemoveBookFromFavoritesButton bookID={bookID} />}
                </ButtonStack>
            </TableCellWithButtonsBox>
        </td>
    );
}

const mapStateToProps = (state: RootStateType) => ({
    isFromFavorites: !state.dataSource.isNetwork,
});

export const TableCellWithButtons = connect(mapStateToProps, {})(Cell);
export default TableCellWithButtons;
