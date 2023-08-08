interface Props {
    error: string;
}

const ErrorMessage = (props: Props): JSX.Element => {
    const { error } = props;

    return (
        <div className="PageContainer">
            <div className="CustomBox" role="alert">
                <span className="notfound__item">Ojejku! Coś poszło nie tak:</span>
                <br />
                <span className="notfound__item">{error} &#128549;</span>
            </div>
        </div>
    );
};
export default ErrorMessage;
