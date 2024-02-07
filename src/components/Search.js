import React from "react";
import { Link } from "react-router-dom";

const Search = ({ item }) => {
    return (
        <div>
            <Link to={`/${item}`}>{item}</Link>
        </div>
    )
}

export default Search