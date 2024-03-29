import uuid from "react-uuid";

import createListItemContent from "./utils/createListItemContent";

interface Props {
    label: string;
    categories: (string | { [key: string]: string })[];
}

const Categories = (props: Props) => {
    const { label, categories } = props;
    const categoriesId = uuid();

    return (
        <>
            <p id={categoriesId} className="details__header details__strong">
                {label + ":\xa0"}
            </p>
            <ul aria-labelledby={categoriesId} className="details__list list">
                {categories.map((category, index, categories) => (
                    <li className="details__item list__item " key={uuid()}>
                        {createListItemContent(category, index, categories)}
                    </li>
                ))}
            </ul>
            <br />
        </>
    );
};
export default Categories;
