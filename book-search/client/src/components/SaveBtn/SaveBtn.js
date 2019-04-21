import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function SaveBtn(props) {
  return (
    <button {...props} className="save-btn btn waves-effect waves-light z-depth-2"> 
      {props.children}
      Save!
    </button>
  );
}

export default SaveBtn;

