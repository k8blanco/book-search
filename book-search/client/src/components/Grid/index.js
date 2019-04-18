import React from "react";

//We export the Container, Row, and Col components from this file so we can use all Materialize components w/o worrying about classnames

export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}></div>;
}

export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({ size, children }) {
    return (
        <div
            className={size
                .split(" ")
                .map(size => "col " + size)
                .join(" ")}
        >
            {children}
        </div>
    );
}