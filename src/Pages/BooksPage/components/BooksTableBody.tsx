import uuid from "react-uuid";

import { connect } from "react-redux";

import Cell from "./components/Cell";
import { useGetTableData } from "hooks";
import getSinglePageData from "js/BooksManager/tableHelpers/getSinglePageData";

import { columns } from "models/columns";
import { RootStateType } from "types";

interface Props {
    books: RootStateType["books"]["books"];
    pageNumber: RootStateType["books"]["currentPageNumber"];
    numberOfPages: RootStateType["books"]["numberOfPages"];
}

export const BooksTableBody = (props: Props) => {
    const { books, pageNumber, numberOfPages } = props;
    const data = getSinglePageData(pageNumber, books, numberOfPages);
    const tableData = useGetTableData();
    console.log("tableData", tableData);

    // const getBooks: Worker = useMemo(() => new Worker(new URL("./getPageContentWorker.ts", import.meta.url)), []);
    // const [newBooks, setNewBooks] = useState<number>(0);

    // useEffect(() => {
    //     if (window.Worker) {
    //         getBooks.postMessage(2);
    //     }
    // }, [getBooks]);

    // useEffect(() => {
    //     if (window.Worker) {
    //         getBooks.onmessage = (e: MessageEvent<number>) => {
    //             setNewBooks((prev: any) => e.data);
    //         };
    //     }
    // }, [getBooks]);
    // useEffect(() => {
    //     console.log("newBooks", newBooks);
    // }, [newBooks]);

    if (!data || !data.length) return null;

    return (
        <tbody>
            {data.map(book => (
                <tr key={uuid()}>
                    {columns.fields.map((item, index) => {
                        return <Cell textContent={book[item] as string} index={index} book={book} key={uuid()} />;
                    })}
                </tr>
            ))}
        </tbody>
    );
};

const mapStateToProps = (state: RootStateType) => ({
    books: state.books.books,
    pageNumber: state.books.currentPageNumber,
    numberOfPages: state.books.numberOfPages,
});

export default connect(mapStateToProps, {})(BooksTableBody);
