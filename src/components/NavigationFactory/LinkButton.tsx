import * as React from "react";
import { Link } from "react-router-dom";

interface Props {
    link: string;
    label: string;
}

const LinkButton = (props: Props) => {
    const { link, label } = props;

    return (
        <Link to={link} className="button button--ok button--long button--no-underline">
            {label}
        </Link>
    );
};
export default React.memo(LinkButton);
