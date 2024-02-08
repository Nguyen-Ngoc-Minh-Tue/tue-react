import React from "react";
import Router from '../asset/Router'
import Redux from '../asset/Redux'
import Toolkit from '../asset/Toolkit'
import NotFound from "./NotFound";

const Search = ({ item }) => {
    const packages = {
        "react-router-dom": <Router />,
        "react-redux": <Redux />,
        "redux-toolkit": <Toolkit />
    }
    return (
        <div>
            {packages[item] || <NotFound />}
        </div>
    )
}

export default Search