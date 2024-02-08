import React from "react";
import Search from "./Search";

const SearchList = ({ searchList }) => {
    return (
        <div>
            {searchList.map((item) => <Search key={item} item={item} />)}
        </div>
    )
}

export default SearchList;