import { MouseEventHandler } from "react";

import { Buttons } from "js/utils";
import { RoundButtons } from "types";

interface Props {
    id: string;
    type: RoundButtons;
    clickHandler?: MouseEventHandler<HTMLButtonElement>;
}

const RoundButton = (props: Props) => {
    const { id, type, clickHandler } = props;

    const MyIconButton = Buttons.createIconButton(type);
    const MyImage = Buttons.createIconButtonImage(type);
    const tooltipText = Buttons.getTooltipText(type);
    const itemProp = Buttons.getItemProp(type);
    const label = Buttons.getAriaLabel(type);

    return (
        <>
            <MyIconButton aria-label={label} itemProp={itemProp} data-content={id} onClick={clickHandler} className="tooltip">
                <span className="tooltiptext">{tooltipText}</span>
                <MyImage />
            </MyIconButton>
        </>
    );
};

export default RoundButton;
