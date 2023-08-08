interface Props {
  node: string;
}
export const Title = (props: Props) => {
  const { node } = props;

  return <h1 className="details__title">{node}</h1>;
};

export default Title;
