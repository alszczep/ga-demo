import React, { FunctionComponent } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "components/Layout";
import Home from "components/Home";
import Form1 from "components/Form1";
import Form2 from "components/Form2";
import Scroll from "components/Scroll";
import List from "components/List";
import ListItem from "components/ListItem";
import Gtm from "components/Gtm";
import TagManager from "react-gtm-module";
// import ReactGA from "react-ga4";

TagManager.initialize({
  gtmId: "GTM-5FLXTFV",
  dataLayer: {
    clickCount: 0,
  },
});

// ReactGA.initialize("G-6KSKFLREHX");
// ReactGA.send("pageview");

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="form1" element={<Form1 />} />
            <Route path="form2" element={<Form2 />} />
            <Route path="scroll" element={<Scroll />} />
            <Route path="list">
              <Route index element={<List />} />
              <Route path=":listItemId" element={<ListItem />} />
            </Route>
            <Route path="gtm" element={<Gtm />} />
          </Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
