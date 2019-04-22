import React from "react";
import "./style.css";

export function ListItem({ children }) {
  return (
    <div className="row">
      <div className="card small col s10 push-s1 bookCard">
        <li className="collection-item avatar">{children}</li>
      </div>
    </div>
  ) 
}
