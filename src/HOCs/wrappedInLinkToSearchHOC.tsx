import { Link } from "react-router-dom";
import Paths from "Routing/Paths";

function wrappedInLinkToSearchHOC<T>(Component: React.ComponentType<T>) {
  return (props: React.PropsWithChildren<T>) => (
    <Link to={Paths.search} style={{ textDecoration: "none" }}>
      <Component {...props} />
    </Link>
  );
}

export default wrappedInLinkToSearchHOC;
