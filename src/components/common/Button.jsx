import * as React from "react";

const Button = props => {
  return (
    // <button className={props.cls} onClick={props.fn}>
      <button className={`button ${props.cls}`} onClick={props.fn}>
      {props.text}
    </button>
  );
};

export default React.memo(Button);
