import { BookDetails } from "types/types";

interface Props {
    title: BookDetails["volumeInfo"]["title"];
}
export const Title = (props: Props) => {
    const { title } = props;

    return <h1 className="details__title">{title}</h1>;
};

export default Title;
