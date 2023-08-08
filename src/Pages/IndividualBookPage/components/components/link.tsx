interface Props {
  href: string;
  label: string;
}

export const Link = (props: Props) => {
  const { href, label } = props;

  return (
    <a className="details__link" href={href}>
      {label}
    </a>
  );
};

export default Link;
