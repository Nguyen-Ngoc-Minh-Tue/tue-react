import React from "react";
import { useState } from "react";

function Router() {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
    return (
        <div>
            <h3>react-router-dom</h3>
            <fieldset>
                <legend>install</legend>
                <code>npm install react-router-dom</code>
            </fieldset>
            <a
                href="https://reactrouter.com"
                target="_blank"
                rel="noreferrer"
            >
                react-router-dom
            </a><br></br>
            <button onClick={() => setLike(like + 1)}>like</button>{like} {''}
            <button onClick={() => setDislike(dislike + 1)}>dislike</button>{dislike}
        </div>
    )
}
export default Router