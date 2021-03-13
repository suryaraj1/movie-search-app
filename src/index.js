import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <h1>Movie Search App</h1>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));