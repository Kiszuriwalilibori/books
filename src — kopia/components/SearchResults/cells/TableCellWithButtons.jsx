import * as React from "react";
import { connect } from "react-redux";
import SmallButton from "../ButtonSmallGeneric";

const Cell = props => {
  const { c, i, ar, isFetchedFromURL, isCacheSupported } = props;
  const bookID = ar[ar.length - 1];
  return (
    <td key={i}>
      <div className="cell-delete">
        <div>{c}</div>
        <SmallButton type="goToShop" id={bookID} />
        <SmallButton type="removeBook" id={bookID} />
        <SmallButton type="showFullInfo" id={bookID} />
        {isFetchedFromURL && isCacheSupported && <SmallButton type="addToFavorites" id={bookID} />}
        {!isFetchedFromURL && <SmallButton type="removeBookFromFavorites" id={bookID} />}
      </div>
    </td>
  );
};

const mapStateToProps = state => ({
  isCacheSupported: state.books.cacheSupported,
  isFetchedFromURL: state.books.isFetchedFromURL,
});

export const TableCellWithButtons = connect(mapStateToProps, null)(Cell);
