import React from "react";
import "./style.css";

export function SavedList({ children }) {
    return (
        <div className="list-overflow-container">
            <ul className="collection">{children}</ul>
        </div>
    );
}

export function ListItem({ children }) {
    return <li className="collection-item">{children}</li>;
}


// function SavedList(props) {
//     return (
//         <div className="row">
//             <div className="col s12">
//                 <div className="card horizontal">
//                     <div className="card-image">
//                         <img alt={props.title} src={props.thumbnail} />
//                     </div>
//                     <div className="card-stacked">
//                         <div className="card-title">
//                             <h2>{props.title}</h2>
//                             <h4>By {props.author} </h4>
//                         </div>
//                         <div className="card-content">
//                             <p>{props.synopsis}</p>
//                         </div>
//                     </div>
//                     <a className="waves-effect waves-light btn z-depth-2">
//                     <i className="fas fa-check right"></i>SAVE</a>
//             </div>
//             </div>
//         </div>
//     )
// }

// export default SavedList;