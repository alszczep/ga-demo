import React, { FunctionComponent, useEffect, useState } from "react";
import TagManager from "react-gtm-module";

const Gtm: FunctionComponent = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        clickCount,
      },
    });
    console.log("Click count set: " + clickCount);
  }, [clickCount]);

  return (
    <div>
      <h1>GTM</h1>
      <div>clickCount: {clickCount}</div>
      <button onClick={() => setClickCount(clickCount + 1)}>
        increment clickCount
      </button>
      <button id="send">send to gtm</button>
    </div>
  );
};

export default Gtm;
