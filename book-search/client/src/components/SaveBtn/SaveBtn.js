import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function SaveBtn(props) {
  return (
    <div className="row">
    <div className="col s1 push-s11">
    <button {...props} className="save-btn light-green darken-4 btn waves-effect waves-light z-depth-2"> 
      {props.children}
      <i className="fas fa-star"></i>
    </button>
    </div>
    </div>
  );
}

export default SaveBtn;

