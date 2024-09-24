import { useRef, useEffect, useState } from "react";

import Page from "./component/page";
// import PostList from "./container/post-list";

function App() {
  const scrollPositionRef = useRef(0);

  const handleScroll = () => {
    scrollPositionRef.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("scrollPositionRef", scrollPositionRef);
  }, [scrollPositionRef.current]);

  return (
    <Page>
      <button onClick={handleScroll}>Click</button>
      <p style={{ height: 10000 }}></p>
    </Page>
  );
}

export default App;
