import React from "react";
import "./style.css";


function Result(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card horizontal">
                    <div className="card-image">
                        <img alt={props.title} src={props.thumbnail} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-title">
                            <h2>{props.title}</h2>
                            <h4>By {props.author} </h4>
                        </div>
                        <div className="card-content">
                            <p>{props.synopsis}</p>
                        </div>
                    </div>
                    <a className="waves-effect waves-light btn z-depth-2">
                    <i className="fas fa-check right"></i>SAVE</a>
            </div>
            </div>
        </div>
    )
}

export default Result;