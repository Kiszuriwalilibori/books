import uuid from "react-uuid";

import { connect } from "react-redux";

import { RootStateType } from "types";
import { AddToFavoritesButton, GoToShopButton, RemoveBookButton, RemoveFromFavoritesButton, ShowFullInfoButton } from "./buttons";

interface Props {
    index: number;
    textContent: string;
    bookID: string;
    isFromNetwork: boolean;
    isCacheSupported: boolean;
}

export const Cell = (props: Props) => {
    let { textContent, bookID, isFromNetwork, isCacheSupported } = props;

    return (
        <td key={uuid()} role="group">
            <div className="cell-withButtons">
                <span>{textContent}</span>
                <GoToShopButton id={bookID} />
                <RemoveBookButton id={bookID} />
                <ShowFullInfoButton id={bookID} />
                {isFromNetwork && isCacheSupported && <AddToFavoritesButton id={bookID} />}
                {!isFromNetwork && <RemoveFromFavoritesButton id={bookID} />}
            </div>
        </td>
    );
};

const mapStateToProps = (state: RootStateType) => ({
    isCacheSupported: state.cache.isSupported,
    isFromNetwork: state.dataSource.isNetwork,
});

export const TableCellWithButtons = connect(mapStateToProps, {})(Cell);
