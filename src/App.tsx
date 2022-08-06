import React, { FunctionComponent } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from "components/Layout"
import Home from "components/Home"
import Form1 from "components/Form1"
import Form2 from "components/Form2"
import Scroll from "components/Scroll"
import List from "components/List"
import ListItem from "components/ListItem"
import ReactGA from "react-ga4";

ReactGA.initialize("G-G9MQK7EMWC", { testMode: true })
ReactGA.send("pageview")

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="ga-demo">
            <Route index element={<Home />} />
            <Route path="form1" element={<Form1 />} />
            <Route path="form2" element={<Form2 />} />
            <Route path="scroll" element={<Scroll />} />
            <Route path="list">
              <Route index element={<List />} />
              <Route path=":listItemId" element={<ListItem />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate replace to="/ga-demo" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
