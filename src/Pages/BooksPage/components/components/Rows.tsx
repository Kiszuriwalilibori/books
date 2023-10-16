import Cell from "./Cell";

import { Books } from "types";

const Rows = (content: Books) => content.map((row, index) => <tr key={index}>{row.map(Cell)}</tr>);

export default Rows;
