interface Props {
  node: string | number | boolean;
  callback?: Function;
  label?: string;
}

const Paragraph = (props: Props) => {
  const { node, callback, label } = props;
  return (
    <p className="details__item">
      <strong className="details__strong">{label + ": " /* ':\xa0'*/}</strong>
      {callback ? callback(props.node) : node}
    </p>
  );
};

export default Paragraph;
