import * as React from "react";

export const TableCellRegular = props => {
  const { i, c } = props;

  return (
    <td key={i}>
      <div className="cell-regular">{c}</div>
    </td>
  );
};
