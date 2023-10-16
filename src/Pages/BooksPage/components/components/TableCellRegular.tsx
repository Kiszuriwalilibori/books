interface Props {
    cellContent: string;
}

export const TableCellRegular = (props: Props): JSX.Element => {
    const { cellContent } = props;

    return <td className="cell-regular">{cellContent}</td>;
};
