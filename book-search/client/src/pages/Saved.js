import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";


class Saved extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    }
    
    // Deletes a book from the database with a given id, then reloads books from the db
    deleteBook = id => {
        API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    };
    
    render() {
        return (
        <div>
            <div className="container">
                {this.state.books.length ? (
                    <List>
                        {this.state.books.map(book => {
                            return (
                            <ListItem key={book._id}>
                                <a href={"/books/" + book._id}>
                                    <strong>
                                        {book.title} by {book.author}    
                                    </strong>
                                </a>
                                <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                            </ListItem>
                            );
                        })}
                    </List>
                ) : (
                    <h3>No Saved Books Yet</h3>
                    )
                
                }
            </div>
        </div>
        )
    }
}

export default Saved;

