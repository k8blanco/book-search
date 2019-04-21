import React from "react";

export function ListBooks({ children }) {
  return <li className="collection-item avatar">{children}
            {/* <img alt={children} src={children} className="circle" />
            <span className="title">{children} by {children}</span>
            <p>{children}</p> */}
        </li>;
}
