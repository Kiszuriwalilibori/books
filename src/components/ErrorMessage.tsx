import useDebouncedCallback from "hooks/useDebouncedCallback";
import { useTranslation } from "react-i18next";
import { AlertBox, AlertBoxItem, PageContainer } from "pages/styled";

interface Props {
    clickHandler?: Function;
    errorMessage: string;
}

const ErrorMessage = (props: Props): JSX.Element => {
    const { clickHandler, errorMessage } = props;
    const handleClick = useDebouncedCallback<HTMLDivElement>(clickHandler as Function);
    const { t } = useTranslation();

    return (
        <PageContainer onClick={handleClick}>
            <AlertBox role="alert">
                <AlertBoxItem>{t("error")}:</AlertBoxItem>
                <br />
                <AlertBoxItem>{errorMessage} &#128549;</AlertBoxItem>
            </AlertBox>
        </PageContainer>
    );
};
export default ErrorMessage;
