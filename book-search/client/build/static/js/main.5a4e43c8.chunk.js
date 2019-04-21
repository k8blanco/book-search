(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(58)},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(20),r=n.n(l),c=n(60),s=n(61),i=n(62),u=n(21),m=n(6),h=n(7),d=n(10),f=n(8),v=n(11),E=n(5),b=n.n(E),p={getBooks:function(){return b.a.get("/api/books")},queryAPI:function(e){return b.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&printType=books&orderBy=relevance&maxResults=4&key=AIzaSyAEhR-mKXXi3xUa6hdrI8rb4rxlgp4I2H8")},deleteBook:function(e){return b.a.delete("/api/books/"+e)},saveBook:function(e){return console.log(e),b.a.post("/api/books",e)}};function k(e){return o.a.createElement("div",{className:"input-field"},o.a.createElement("input",Object.assign({className:"search"},e)))}function g(e){return o.a.createElement("button",Object.assign({},e,{className:"search-btn btn waves-effect waves-light z-depth-2"}),e.children)}n(49);function y(e){var t=e.children;return o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"collection"},t))}function N(e){var t=e.children;return o.a.createElement("li",{className:"collection-item avatar"},t)}n(50);var B=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-title"},o.a.createElement("h2",null,"No results found.  Search again?"))))};n(51);var I=function(e){return o.a.createElement("button",Object.assign({},e,{className:"save-btn btn waves-effect waves-light z-depth-2"}),e.children,"Save!")},w=n(12),S=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:"",author:"",synopsis:""},n.searchBooks=function(e){p.queryAPI(e).then(function(e){return n.setState({results:e.data.items})}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(u.a)({},a,o))},n.handleFormSubmit=function(e){e.preventDefault(),n.searchBooks(n.state.title)},n.handleSave=function(e){console.log(e.id,e.volumeInfo.title,e.volumeInfo.authors[0]),w.ToastsStore.success("Book Saved!"),p.saveBook({title:e.volumeInfo.title,author:e.volumeInfo.authors[0],synopsis:e.volumeInfo.description,date:new Date(Date.now()),isSaved:!0}).then(console.log("saved to DB")).catch(function(e){return console.log(e)})},n.loadBooks=function(){p.getBooks().then(function(e){return n.setState({books:e.data})}).catch(function(e){return console.log(e)})},n}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.searchBooks("ThroneofGlass")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"searchDiv"},o.a.createElement("form",null,o.a.createElement(k,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),o.a.createElement(g,{disabled:!this.state.title,onClick:this.handleFormSubmit},"Search"))),this.state.results&&this.state.results.length?o.a.createElement("div",{className:"container"},o.a.createElement(y,null,this.state.results.map(function(t){return o.a.createElement(N,{key:t.id,title:t.volumeInfo.title,author:t.volumeInfo.authors,synopsis:t.volumeInfo.description,thumbnail:t.volumeInfo.imageLinks.thumbnail},o.a.createElement("img",{alt:t.volumeInfo.imageLinks.thumbnail,src:t.volumeInfo.imageLinks.thumbnail}),o.a.createElement("span",{className:"title"},t.volumeInfo.title," by ",t.volumeInfo.authors),o.a.createElement("p",null,t.volumeInfo.description),o.a.createElement("a",{href:"/books/"+t._id}),o.a.createElement(I,{onClick:function(){return e.handleSave(t)}}),o.a.createElement(w.ToastsContainer,{store:w.ToastsStore}))}))):o.a.createElement(B,null))}}]),t}(a.Component);n(52);var j=function(e){return o.a.createElement("span",Object.assign({className:"delete-btn btn waves-effect waves-light z-depth-2"},e,{role:"button"}),"\u2717")},O=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:"",author:"",synopsis:""},n.loadBooks=function(){p.getBooks().then(function(e){return n.setState({books:e.data})}).catch(function(e){return console.log(e)})},n.deleteBook=function(e){p.deleteBook(e).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"container"},this.state.books.length?o.a.createElement(y,null,this.state.books.map(function(t){return o.a.createElement(N,{key:t._id},o.a.createElement("a",{href:"/books/"+t._id},o.a.createElement("strong",null,t.title," by ",t.author)),o.a.createElement(j,{onClick:function(){return e.deleteBook(t._id)}}))})):o.a.createElement("h3",null,"No Saved Books Yet")))}}]),t}(a.Component);var C=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"card col s12"},o.a.createElement("h2",null,"404 Page Not Found")))};n(53);var x=function(){return o.a.createElement("nav",null,o.a.createElement("div",{className:"nav-wrapper z-depth-3"},o.a.createElement("a",{href:"/",className:"brand-logo"},"Google Book Search"),o.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},o.a.createElement("li",null,o.a.createElement("a",{href:"/books/saved"},"Saved")))))};n(54);var D=function(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"copyright"},"k8blanco \xa9 2019 "))};var A=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(x,null),o.a.createElement(s.a,null,o.a.createElement(i.a,{exact:!0,path:"/",component:S}),o.a.createElement(i.a,{exact:!0,path:"/books",component:S}),o.a.createElement(i.a,{exact:!0,path:"/books/:id",component:O}),o.a.createElement(i.a,{component:C})),o.a.createElement(D,null)))};r.a.render(o.a.createElement(A,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.5a4e43c8.chunk.js.map