interface Props {
  linkToCover: string;
  label: string;
}

export const Cover = (props: Props) => {
  return (
    <>
      <img className="details__image" src={props.linkToCover} alt={props.label}></img>
      <br />
    </>
  );
};

export default Cover;
