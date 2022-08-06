import React, { FunctionComponent, ReactNode } from "react"
import { Link } from "react-router-dom"
import "./Layout.css"

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return (
        <div>
            <div className="layout-bar">
                <Link to="/ga-demo"><b>Home</b></Link>
                <Link to="/ga-demo/form1">Form 1</Link>
                <Link to="/ga-demo/form2">Form 2</Link>
                <Link to="/ga-demo/scroll">Scroll</Link>
                <Link to="/ga-demo/list">List</Link>
            </div>
            <div className="page-content">
                {children}
            </div>
        </div>
    )
}

export default Layout
