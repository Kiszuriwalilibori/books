import { AlertBox, AlertBoxItem, PageContainer } from "pages/styled";

interface Props {
    clickHandler?: () => void;
    errorMessage: string;
}

const ErrorMessage = (props: Props): JSX.Element => {
    const { clickHandler, errorMessage } = props;

    return (
        <PageContainer onClick={clickHandler}>
            <AlertBox role="alert">
                <AlertBoxItem>Ojejku! Coś poszło nie tak:</AlertBoxItem>
                <br />
                <AlertBoxItem>{errorMessage} &#128549;</AlertBoxItem>
            </AlertBox>
        </PageContainer>
    );
};
export default ErrorMessage;
