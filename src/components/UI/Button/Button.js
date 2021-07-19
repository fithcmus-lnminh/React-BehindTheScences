import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button); //it's still re-rendered because when the App.js re-rendered,
//the function toggleParagraphHandler is recreated, so that consider that new function
// -> onClick props changed -> re-rendered -> solve: useCallback()
