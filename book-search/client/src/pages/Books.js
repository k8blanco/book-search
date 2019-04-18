import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import Search from "../components/Search";
import Result from "../components/Result";
import NoResult from "../components/NoResult";

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

  render() {
    return (
      <div>
              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              
              {this.state.results.length ? (
                <div className="container">
                  {this.state.results.map(book => {
                    return (
                      <Result 
                        key = {book.id}
                        title = {book.volumeInfo.title}
                        author = {book.volumeInfo.authors}
                        synopsis = {book.volumeInfo.description}
                        thumbnail = {book.volumeInfo.imageLinks.thumbnail}
                      />
                    );
                  })}
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

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     books: [],
  //     bookInput: ""
  //   };
  //   // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  //   this.handleInputChange = this.handleInputChange.bind(this);
  // };

  // componentDidMount() {
  //   this.searchAPI();
  //   // this.queryGoogle();
  // }

  // searchAPI = () => {
  //   API.searchBooks()
  //     .then(res => this.setState({ books: res.data }))
  //     .catch(err => console.log(err));
  // };

  // queryGoogle = event => {
  //   // event.preventDefault();
  //   let query = this.state.title.split(" ").join("+");
  //   console.log("query: " + query);

  //   axios 
  //     .get(`https://www.googleapis.com/books/v1/volumes?printType=books&orderBy=relevance&maxResults=1&key=` + key + `&q=${query}`)
  //     .then(response => this.setState({ title: "", results: response.data.items }))
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   // const name = event.target.name;
  //   // const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.queryGoogle(this.state.bookInput);
  //   // if (this.state.title && this.state.author) {
  //   //   API.saveBook({
  //   //     title: this.state.title,
  //   //     author: this.state.author,
  //   //     synopsis: this.state.synopsis
  //   //   })
  //   //     .then(res => this.loadBooks())
  //   //     .catch(err => console.log(err));
  //   // }
  // };




// export default Books;


      // <Container fluid>
      //   <Row>
      //     <Col size="md-6">
      //       <Jumbotron>
      //         <h1>What Books Should I Read?</h1>
      //       </Jumbotron>
      //       <form>
      //         <Input
      //           value={this.state.title}
      //           onChange={this.handleInputChange}
      //           name="title"
      //           placeholder="Title (required)"
      //         />
      //         <Input
      //           value={this.state.author}
      //           onChange={this.handleInputChange}
      //           name="author"
      //           placeholder="Author (required)"
      //         />
      //         <TextArea
      //           value={this.state.synopsis}
      //           onChange={this.handleInputChange}
      //           name="synopsis"
      //           placeholder="Synopsis (Optional)"
      //         />
      //         <FormBtn
      //           disabled={!(this.state.author && this.state.title)}
      //           onClick={this.handleFormSubmit}
      //         >
      //           Submit Book
      //         </FormBtn>
      //       </form>
      //     </Col>
      //     <Col size="md-6 sm-12">
      //       <Jumbotron>
      //         <h1>Books On My List</h1>
      //       </Jumbotron>
      //       {this.state.books.length ? (
      //         <List>
      //           {this.state.books.map(book => (
      //             <ListItem key={book._id}>
      //               <Link to={"/books/" + book._id}>
      //                 <strong>
      //                   {book.title} by {book.author}
      //                 </strong>
      //               </Link>
      //               <DeleteBtn onClick={() => this.deleteBook(book._id)} />
      //             </ListItem>
      //           ))}
      //         </List>
      //       ) : (
      //         <h3>No Results to Display</h3>
      //       )}
      //     </Col>
      //   </Row>
      // </Container>