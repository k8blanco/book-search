import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { SearchInput, SearchBtn } from "../components/Search";
import { List, ListItem } from "../components/List";
import NoResult from "../components/NoResult";
import SaveBtn from "../components/SaveBtn";
import { ToastsContainer, ToastsStore } from 'react-toasts';


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
                        <SaveBtn onClick={() => this.handleSave(book)} />
                        <img alt={book.volumeInfo.imageLinks.thumbnail} src={book.volumeInfo.imageLinks.thumbnail} className="circle" />
                        <span className="title" style={{ fontSize: 30, fontFamily: "'Sorts Mill Goudy', serif" }}>{book.volumeInfo.title} by {book.volumeInfo.authors}</span>
                        <p style={{ marginTop: 20, marginBottom: 20 }}>{book.volumeInfo.description}</p>

                        
                        <ToastsContainer store={ToastsStore}/>
                      </ListItem>
                    );
                  })}
                  </List>                
              ) : (
                <NoResult />
              )
              }
              
      </div>
    );
  }


}

export default Books;
