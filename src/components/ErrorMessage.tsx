import useDebouncedCallback from "hooks/useDebouncedCallback";
import { AlertBox, AlertBoxItem, PageContainer } from "pages/styled";

interface Props {
    clickHandler?: Function;
    errorMessage: string;
}

const ErrorMessage = (props: Props): JSX.Element => {
    const { clickHandler, errorMessage } = props;
    const handleClick = useDebouncedCallback(clickHandler as Function);

    return (
        <PageContainer onClick={handleClick}>
            <AlertBox role="alert">
                <AlertBoxItem>Ojejku! Coś poszło nie tak:</AlertBoxItem>
                <br />
                <AlertBoxItem>{errorMessage} &#128549;</AlertBoxItem>
            </AlertBox>
        </PageContainer>
    );
};
export default ErrorMessage;
