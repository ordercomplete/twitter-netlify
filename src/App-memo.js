import { memo, useEffect, useState } from "react";
import Page from "./component/page";
// import PostList from "./container/post-list";

const Child = memo(
  ({ value }) => {
    console.log("child render", value);
    return <div>{value}</div>;
  },
  (prev, next) => {
    // console.log(prev, next);
    // return true;
    return next.value % 5 !== 0;
  }
);

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setValue((prev) => prev + 1), 1000);
    return () => clearInterval(id);
  }, []);

  console.log("App");

  return (
    <Page>
      <Child value={value} />
    </Page>
  );
}

export default App;
