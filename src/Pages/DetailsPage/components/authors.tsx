import uuid from "react-uuid";
import createListItemContent from "./utils/createListItemContent";

interface Props {
    label: string;
    authors: (string | { [key: string]: string })[];
}

const Authors = (props: Props) => {
    const { label, authors } = props;
    // const stringifiedAuthors = authors.join(", ");
    // todo uwaga z jakichś przyczyn uznałem, że tam może trafiać obiekt. Stąd nie stosuję powyższego ani poniższego
    return (
        <>
            <p id="authors" className="details__header details__strong">
                {label + ":\xa0"}
            </p>
            <ul>
                {authors.map((author, index, authors) => (
                    <li className="details__item list__item " key={uuid()}>
                        {createListItemContent(author, index, authors)}
                    </li>
                ))}
            </ul>
            <br />
        </>
    );
};
export default Authors;

// NIE USUWAĆ  z niezbyt jasnych przyczyn kiedyś było tak. Czyżbym stwierdził, że authors zawiera niekiedy obiekty???:
