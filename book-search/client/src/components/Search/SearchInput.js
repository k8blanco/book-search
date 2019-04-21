import React from "react";

export function SearchInput(props) {
    return (
        <div className="input-field">
            <input className="search" {...props} />
        </div>
    );
}