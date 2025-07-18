import { useSelector } from "react-redux";

import RoundIconButton from "./RoundIconButton";

import { useCreateDebouncedCallback } from "hooks/useCreateDebouncedCallback";
import { isOnlineSelector } from "store/selectors";
import { useGoToShop } from "hooks";

interface Props {
    bookID: string;
}
const GoToShopButton = (props: Props) => {
    const { bookID } = props;
    const isOnline = useSelector(isOnlineSelector);
    const goToShop = useGoToShop();
    const clickHandler = useCreateDebouncedCallback(goToShop, { bookID });

    return <RoundIconButton isDisabled={!isOnline} type="goToShop" ID={bookID} clickHandler={clickHandler} />;
};

export default GoToShopButton;
