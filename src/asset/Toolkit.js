import React from "react";
import { useState } from "react";

function Toolkit() {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
    return (
        <div>
            <h3>redux-toolkit</h3>
            <fieldset>
                <legend>install</legend>
                <code>npm install redux-toolkit</code>
            </fieldset>
            <a
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noreferrer"
            >
                redux-toolkit
            </a>
            <button onClick={() => setLike(like + 1)}>like</button>{like} {''}
            <button onClick={() => setDislike(dislike + 1)}>dislike</button>{dislike}
        </div>
    )
}

export default Toolkit