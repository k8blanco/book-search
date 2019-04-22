import React from "react";
import "./style.css";

export function SearchInput(props) {
    return (
        <div className="row">
            <div className="col s6 push-s3 center"> 
                <h2>Search for a Book</h2>  
                <div className="input-field">
                    <input className="search" {...props} />
                </div>
            </div>
        </div>
    );
}