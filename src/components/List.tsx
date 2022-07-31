import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"

const List: FunctionComponent = () => {
    return (
        <div>
            <h1>List</h1>
            <ol>
                {list.map((listItem, itemId) => <li>
                    <Link to={`/list/${itemId}`}>{listItem}</Link>
                </li>)}
            </ol>
        </div>
    )
}

export default List

export const list = [
    "List item 1",
    "List item 2",
    "List item 3",
    "List item 4",
    "List item 5",
]
