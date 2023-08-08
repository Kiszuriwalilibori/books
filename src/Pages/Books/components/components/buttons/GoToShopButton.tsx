import RoundButton from "./RoundButton";
import { goToShop } from "js/utils";

import { useCreateDebouncedCallback, useCreateRedirect } from "hooks";

interface Props {
    id: string;
}
const GoToShopButton = (props: Props) => {
    const { id } = props;
    const redirect = useCreateRedirect();
    const GoToShop = useCreateDebouncedCallback(goToShop, { redirect: redirect });

    return (
        <RoundButton
            type="goToShop"
            id={id}
            clickHandler={e => {
                GoToShop(e.target);
            }}
        />
    );
};

export default GoToShopButton;
