import React from "react";

export function SearchBtn(props) {
    return (
        <div className="row center">
            <button {...props} className="search-btn btn waves-effect waves-light z-depth-2 purple darken-3">
                {props.children}
            </button>
        </div>
    )
}