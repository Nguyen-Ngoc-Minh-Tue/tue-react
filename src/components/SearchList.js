import React from "react";
import Search from "./Search";

const SearchList = ({ searchList }) => {
    return (
        <div>
            <ul>{searchList.map((item) => <Search item={item} />)}</ul>
        </div>
    )
}

export default SearchList;