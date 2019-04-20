import React from "react";
import "./style.css";



export function ResultList({ children }) {
    return (
        <div className="row">
            <div className="col s12">
                <ul className="collection with-header">{children}</ul>
            </div>
        </div>
    );
}

