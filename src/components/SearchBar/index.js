import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SearchBar = () => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=20ba8c15f704a93c83c81be8fa5abd5b&language=en-US&query=${query}&page=1&include_adult=false`;
        
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setMovies(json.results);
            })
    }

    const queryHandler = (e) => {
        setQuery(e.target.value);
    }

    return (
        <div>
            <form className="query" onSubmit={searchMovies}>
                <input 
                className="input" 
                placeholder="Enter a movie name..."
                onChange={queryHandler}
                >
                </input>
                <button type="submit" 
                    className="btn">
                    Search 
                    <FontAwesomeIcon className="icon" icon={faSearch} />
                </button>
            </form>

            <div className="card-container">
            
            </div>
        </div>
    )
}

export default SearchBar;