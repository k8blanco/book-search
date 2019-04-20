import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
import { ToastsContainer, ToastsStore } from 'react-toasts';

class ComponentItem extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        
    }

    handleSave = event => {
        event.preventDefault();
        ToastsStore.success("Book Saved!");

            API.saveBook({
                key: this.props.id,
                title: this.props.title,
                author: this.props.author,
                synopsis: this.props.synopsis,
                thumbnail: this.props.thumbnail,
                isSaved: true
            })
                .then(console.log("book saved"))
                .catch(err => console.log(err));
    }



    render() {
        return (
            <li className="collection-item avatar">
                <img alt={this.props.title} src={this.props.thumbnail} className="circle" />
                <span className="title">{this.props.title} by {this.props.author}</span>
                <p>{this.props.synopsis}</p>
                <button onClick={this.handleSave} className="secondary-content" id="saveBtn"><i className="fas fa-star center"></i></button>
                <ToastsContainer store={ToastsStore}/>
            </li>
        )
    }
}

export default ComponentItem;


// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// // import API from "../utils/API";

// class ComponentItem extends Component {
//     render() {
//         const { onPress, children } = this.props;

//         return (
//             <button type="button" onClick={onPress}>
//                 {children}
//             </button>
//         )
//     }
// }

// class ChangeInput extends Component {
//         handleEvent = () => {
//         alert("I was clicked!");
//     };

//     render() {
//         return (
//             <div>
//                 <ComponentItem onPress={this.handleEvent}>Clickonme</ComponentItem>
//             </div>
//         );
//     }
// }

// export default ChangeInput;

