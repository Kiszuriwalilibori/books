import React from "react";

interface Props {
    label: string;
}

export const HiddenH1 = (props: Props) => {
    const { label } = props;
    return (
        <header className="hidden-away">
            <h1>{label}</h1>
        </header>
    );
};

export default React.memo(HiddenH1);
