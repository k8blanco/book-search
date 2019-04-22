import React from "react";
import "./style.css";

export function List({ children }) {
    return (
        <div className="container">
          <div className="card listCard">
            <ul className="collection">{children}</ul>
          </div>
        </div>
      );
}

