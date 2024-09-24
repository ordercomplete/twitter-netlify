import { useRef, useEffect, useState, useMemo } from "react";
import Page from "./component/page";
// import PostList from "./container/post-list";

function Child({ state }) {
  console.log("render");

  // const handleClick = console.log("hello world") || (() => alert("click"));
  const handleClick = () => alert("click");

  return <div onClick={handleClick}>Child</div>;
}

function App() {
  const [state, setState] = useState(0);

  const [state2, setState2] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setState((prev) => prev + 1), 1000);

    const id2 = setInterval(() => setState2((prev) => prev + 1), 5000);

    return () => {
      clearInterval(id);
      clearInterval(id2);
    };
  }, []);

  return (
    <Page>
      Hello world {state} <Child state={state2} />
    </Page>
  );
}

export default App;
