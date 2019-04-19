import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { SavedList, ListItem } from "../components/SavedList";
import DeleteBtn from "../components/DeleteBtn";


class Saved extends Component {
    state = {
        books: {}
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
        <div>
            <div className="container">
                {this.state.books.length ? (
                    <SavedList>
                        {this.state.books.map(book => {
                            <ListItem key={book._id}>
                                <a href={"/books/" + book._id}>
                                    <strong>
                                        {book.title} by {book.author}    
                                    </strong>
                                </a>
                            <DeleteBtn />
                            </ListItem>
                        })}
                    </SavedList>
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


// class Detail extends Component {
//   state = {
//     book: {}
//   };
//   // When this component mounts, grab the book with the _id of this.props.match.params.id
//   // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   componentDidMount() {
//     API.getBook(this.props.match.params.id)
//       .then(res => this.setState({ book: res.data }))
//       .catch(err => console.log(err));
//   }

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1>
//                 {this.state.book.title} by {this.state.book.author}
//               </h1>
//             </Jumbotron>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-10 md-offset-1">
//             <article>
//               <h1>Synopsis</h1>
//               <p>
//                 {this.state.book.synopsis}
//               </p>
//             </article>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-2">
//             <Link to="/">← Back to Authors</Link>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Detail;
