import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { SearchInput, SearchBtn } from "../components/Search";
import { List, ListItem } from "../components/List";
import NoResult from "../components/NoResult";
import SaveBtn from "../components/SaveBtn";
import { ToastsContainer, ToastsStore } from 'react-toasts';
// import { List, ListItem } from "../components/List";
// import ComponentItem from "../components/Result/ComponentItem";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  }

  //When this component mounts, search for the book "Throne of Glass"
  componentDidMount() {
    this.searchBooks("ThroneofGlass");
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
     this.searchBooks(this.state.title);
  }

  handleSave = (book) => {
    // event.preventDefault();
    console.log(book.id, book.volumeInfo.title, book.volumeInfo.authors[0]);
    ToastsStore.success("Book Saved!");

        API.saveBook({
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors[0],
            synopsis: book.volumeInfo.description,
            date: new Date(Date.now()),
            isSaved: true
        })
            .then(console.log("saved to DB"))
            .catch(err => console.log(err));
} 


loadBooks = () => {
  API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
}


  render() {
    return (
      <div>
            <div className="searchDiv">
              <form>
                <SearchInput 
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <SearchBtn 
                  disabled={!(this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Search
                </SearchBtn>
              </form>
            </div>
              
              {this.state.results && this.state.results.length ? (
                <div className="container">
                <List>
                  {this.state.results.map(book => {
                    return (
                        <ListItem 
                          key = {book.id}
                          title = {book.volumeInfo.title}
                          author = {book.volumeInfo.authors}
                          synopsis = {book.volumeInfo.description}
                          thumbnail = {book.volumeInfo.imageLinks.thumbnail}
                        >
                        <img alt={book.volumeInfo.imageLinks.thumbnail} src={book.volumeInfo.imageLinks.thumbnail} />
                        <span className="title">{book.volumeInfo.title} by {book.volumeInfo.authors}</span>
                        <p>{book.volumeInfo.description}</p>

                        <a href={"/books/" + book._id}>
                        </a>
                        <SaveBtn onClick={() => this.handleSave(book)} />
                        <ToastsContainer store={ToastsStore}/>
                      </ListItem>
                    );
                  })}
                  </List>
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
