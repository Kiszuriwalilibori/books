type Content = string | number | boolean;

interface Props {
    content: Content;
    preProcess?: (arg0: Content) => string;
    label?: string;
}

const Paragraph = (props: Props) => {
    const { content, preProcess, label } = props;
    return (
        <p className="details__item">
            <strong className="details__strong">{label + ": "}</strong>
            {preProcess ? preProcess(content) : content}
        </p>
    );
};

export default Paragraph;
