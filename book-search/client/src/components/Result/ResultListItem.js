import React from "react";
import "./style.css";

export function ResultListItem(props) {
    return (
        <li className="collection-item avatar">
            <img alt={props.title} src={props.thumbnail} className="circle" />
            <span className="title">{props.title} by {props.author}</span>
            <p>{props.synopsis}</p>
            {/* <button {...props} className="save-btn btn waves-effect waves-light z-depth-2">
            {props.children}
            </button> */}
            <a href="#!" role="button" {...props} className="secondary-content" id="saveBtn"><i className="fas fa-star center"></i></a>
        </li>
    )

}


 