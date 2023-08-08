interface Props {
    textContent: string;
}
export const TableCellRegular = (props: Props): JSX.Element => {
    const { textContent } = props;

    return (
        <td>
            <span className="cell-regular">{textContent}</span>
        </td>
        // <td className="cell-regular">{textContent}</td>
    );
};
