import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <div className="row">
      <div className="col s1 push-s10">
        <span className="delete-btn btn light-green darken-4 btn waves-effect waves-light z-depth-2" {...props} role="button">
          <i className="fas fa-trash-alt"></i>
        </span>
      </div>
    </div>
  );
}

export default DeleteBtn;
