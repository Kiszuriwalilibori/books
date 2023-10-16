import { BookDetails } from "types/types";

interface Props {
    linkToCover: BookDetails["volumeInfo"]["imageLinks"]["smallThumbnail"]["linkToCover"];
}
const labelText = "zdjęcie okładki";
export const Cover = (props: Props) => {
    const { linkToCover } = props;
    return (
        <>
            <img className="details__image" src={linkToCover} alt={labelText}></img>
            <br />
        </>
    );
};

export default Cover;
