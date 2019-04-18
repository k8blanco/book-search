import axios from "axios";
const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=`;
const queryParams = `&printType=books&orderBy=relevance&maxResults=1&key=`;
// const apiKey = process.env.REACT_APP_GB_APIKEY;
const API_KEY = process.env.REACT_APP_APIKEY;

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Searches google API
  queryAPI: function(query) {
    // let stringQuery = this.state.value.split(" ").join("+");
    return axios.get(BASEURL + query + queryParams + API_KEY);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }

};
