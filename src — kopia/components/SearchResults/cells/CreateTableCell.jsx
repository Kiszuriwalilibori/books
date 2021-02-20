import React from "react";
import { TableCellWithButtons } from "./TableCellWithButtons";
import { TableCellRegular } from "./TableCellRegular";

const fifthElement = (i, ar) => (i === ar.length - 5 ? true : false);
const lastElement = (i, ar) => (i === ar.length - 1 ? true : false);
const createTableCell = (c, i, ar) => {
  return fifthElement(i, ar) ? <TableCellWithButtons c={c} i={i} ar={ar} key={i} /> : lastElement(i, ar) ? null : <TableCellRegular key={i} i={i} c={c} />;
};
export default createTableCell;
