import React, { FunctionComponent, ReactNode } from "react"
import { Link } from "react-router-dom"
import "./Layout.css"

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return (
        <div>
            <div className="layout-bar">
                <Link to="/form1">Form 1</Link>
                <Link to="/form2">Form 2</Link>
                <Link to="/scroll">Scroll</Link>
                <Link to="/list">List</Link>
            </div>
            <div className="page-content">
                {children}
            </div>
        </div>
    )
}

export default Layout
