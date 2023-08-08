import Cell from "./Cell";

import { BookRecordsArray } from "types";

const Rows = (content: BookRecordsArray) => content.map((row, index) => <tr key={index}>{row.map(Cell)}</tr>);

export default Rows;
