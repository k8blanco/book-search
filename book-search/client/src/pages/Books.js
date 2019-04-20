import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import Search from "../components/Search";
import { ResultList } from "../components/Result";
import NoResult from "../components/NoResult";
// import { List, ListItem } from "../components/List";
import ComponentItem from "../components/Result/ComponentItem";

class Books extends Component {
  state = {
    title: "",
    results: []
  }

  //When this component mounts, search for the book "Throne of Glass"
  componentDidMount() {
    this.searchBooks("ThroneofGlass");
    console.log("searching");
  }

  searchBooks = query => {
    API.queryAPI(query)
      .then(res => this.setState({ results: res.data.items }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
          [name]: value
        });

  }

  handleFormSubmit = event => {
     event.preventDefault();
     this.searchBooks(this.state.search);
     console.log(this.state.search);
  }

  // handleSave = event => {
  //   console.log("save event")
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       key: this.book.id,
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis,
  //       thumbnail: this.state.thumbnail
  //     })
  //       // .then(res => this.saveToast())
  //       // .then(res => this.loadBooks())
  //       .then(console.log("book saved"))
  //       .catch(err => console.log(err));
  //   }
  // }

  saveToast = event => {
    //code to create "Book Saved!" toast
  }

  render() {
    return (
      <div>
              <Search
                value={this.state.search}
                handleInputChange=  {this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />

              {this.state.results.length ? (
                <div className="container">
                <ResultList>
                  {this.state.results.map(book => {
                    return (
                        <ComponentItem 
                          key = {book.id}
                          title = {book.volumeInfo.title}
                          author = {book.volumeInfo.authors}
                          synopsis = {book.volumeInfo.description}
                          thumbnail = {book.volumeInfo.imageLinks.thumbnail}
                        >
                      </ComponentItem>
                    );
                  })}
                  </ResultList>
                  </div>
              ) : (
                <NoResult />
              )
              }
              
      </div>
    );
  }


}

export default Books;
