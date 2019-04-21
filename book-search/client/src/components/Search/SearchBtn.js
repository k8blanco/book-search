import React from "react";

export function SearchBtn(props) {
    return (
        <button {...props} className="search-btn btn waves-effect waves-light z-depth-2">
            {props.children}
        </button>
    )
}