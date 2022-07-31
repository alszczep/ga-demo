import React, { FunctionComponent } from "react"
import { useParams } from "react-router"
import { list } from "./List"

const ListItem: FunctionComponent = () => {
    const { listItemId } = useParams()

    return (
        <div>
            <h1>ListItem</h1>
            {listItemId ? `Item name: ${list[Number(listItemId)]}` : "Item does not exist"}
        </div>
    )
}

export default ListItem
