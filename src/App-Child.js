import { lazy, useEffect, useState } from "react";
import Page from "./component/page";
// import PostList from "./container/post-list";

const Child = lazy(() => import("./Child"));

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setValue((prev) => prev + 1), 1000);
    return () => clearInterval(id);
  }, []);

  console.log("App");

  return (
    <Page>
      <div>state: {value} </div>
      <div>{value > 5 && <Child value={value} />}</div>
    </Page>
  );
}

export default App;
