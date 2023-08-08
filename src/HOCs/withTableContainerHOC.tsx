import * as React from "react";

function withTableContainerHOC<T>(Component: React.ComponentType<T>) {
  return (props: React.PropsWithChildren<T>) => (
    <div className="table__container">
      <Component {...props} />
    </div>
  );
}

export default withTableContainerHOC;
