import { lazy, useEffect, useState, Suspense } from "react";
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
      <div>
        {value > 5 && (
          <Suspense fallback={<div>Loading...</div>}>
            <Child value={value} />
          </Suspense>
        )}
      </div>
    </Page>
  );
}

export default App;
