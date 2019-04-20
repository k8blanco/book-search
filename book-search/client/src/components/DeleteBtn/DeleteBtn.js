import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn btn waves-effect waves-light z-depth-2" {...props} role="button">
      ✗
    </span>
  );
}

export default DeleteBtn;