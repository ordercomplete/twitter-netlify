import { useRef, useEffect, useState } from "react";
import Page from "./component/page";
// import PostList from "./container/post-list";

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setState((prev) => prev + 1), 1000);

    return () => clearInterval(id);
  }, []);

  const data = Math.random() + Math.random + console.log("Hello World");

  return <Page>Hello world {state}</Page>;
}

export default App;
