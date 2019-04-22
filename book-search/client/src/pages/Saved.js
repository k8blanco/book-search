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
        <div style={{ marginTop: 60 }}>
            <h2 className="center" style={{ marginBottom: 40 }}>Saved Books</h2>
            {this.state.books.length ? (
                <List>
                    {this.state.books.map(book => {
                        return (
                            <ListItem key={book._id}>
                            <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                                <span className="title" style={{ fontSize: 30, fontFamily: "'Sorts Mill Goudy', serif" }}>{book.title} by {book.author}</span>
                                <p style={{ marginTop: 20, marginBottom: 20 }}>{book.synopsis}</p>
                            </ListItem>
                            );
                        })}
                    </List>
                ) : (
                    <h3>No Saved Books Yet</h3>
                    )
            }
        </div>
        )
    }
}

export default Saved;

