import { MouseEventHandler } from "react";

import { Buttons } from "utils";
import { RoundButtons } from "types";

interface Props {
    ID: string;
    type: RoundButtons;
    clickHandler?: MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
}

const RoundIconButton = (props: Props) => {
    const { ID, type, clickHandler, isDisabled = false } = props;

    const IconButton = Buttons.createIconButton(type);
    const MyImage = Buttons.createIconButtonImage(type);
    const tooltipText = Buttons.getTooltipText(type);
    const itemProp = Buttons.getItemProp(type);
    const label = Buttons.getAriaLabel(type);

    return (
        <>
            <IconButton disabled={isDisabled} sx={{ p: 0.75 }} aria-label={label} itemProp={itemProp} data-content={ID} onClick={clickHandler} className="tooltip">
                <span className="tooltiptext">{tooltipText}</span>
                <MyImage />
            </IconButton>
        </>
    );
};

export default RoundIconButton;
