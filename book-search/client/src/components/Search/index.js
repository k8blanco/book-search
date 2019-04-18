import React from "react";

function Search(props) {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                    <input  
                        onChange={props.handleInputChange}
                        value={props.value}
                        id="search"
                        name="search"
                        type="text"
                        form="searchForm"
                        className="center"
                        placeholder="Book Title" 
                    />
                    <br />  
                    <button onClick={props.handleFormSubmit} className="btn waves-effect waves-light">
                    Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Search;