import React, { FunctionComponent } from "react"

const Scroll: FunctionComponent = () => {
    return (
        <div>
            {["#111111", "#333333", "#555555", "#777777", "#999999"].map(color => <div style={{ background: color, height: "350px" }} />)}
        </div>
    )
}

export default Scroll
