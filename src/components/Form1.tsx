import React, { FunctionComponent } from "react"
import ReactGA from "react-ga4";

const Form1: FunctionComponent = () => {
    return (<>
        <h1>Form1</h1>
        <form>
            <button type="submit" onClick={(e) => {
                e.preventDefault()
                console.log("form1 event triggered")
                ReactGA.event("form1")
            }}>submit</button>
        </form>
    </>)
}

export default Form1
