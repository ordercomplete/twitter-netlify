import { useRef, useEffect, useState } from "react";
import Page from "./component/page";
import Grid from "./component/grid";
import Box from "./component/box";
// import PostList from "./container/post-list";

function App() {
  const prevValueRef = useRef(null);

  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(value, "value");
    console.log(prevValueRef, "prevValueRef");

    prevValueRef.current = value;
  }, [value]);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    console.log("new prevValueRef");
  }, [prevValueRef.current]);

  console.log("render");

  return (
    <Page>
      <Grid>
        <Box>
          <p>value: {value}</p>
          <p>prevValueRef: {prevValueRef.current}</p>
        </Box>
        <Box>
          <button onClick={handleIncrement}>Increment</button>
        </Box>
      </Grid>
    </Page>
  );
}

export default App;
