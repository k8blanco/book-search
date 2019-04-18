import React from "react";
import "./style.css";


function NoResult(props) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>No results found.  Search again?</h2>
                </div> 
            </div>
        </div>
    )
}

export default NoResult;