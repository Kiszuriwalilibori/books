import * as React from "react";

import { NavigationFactory } from "components";

function withNavigationHOC<T>(Component: React.ComponentType<T>) {
  return (props: React.PropsWithChildren<T>) => (
    <>
      <NavigationFactory />
      <Component {...props} />
    </>
  );
}

export default withNavigationHOC;
