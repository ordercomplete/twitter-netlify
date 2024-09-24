import { useRef, useEffect } from "react";
import Page from "./component/page";
import Grid from "./component/grid";
import Box from "./component/box";
// import PostList from "./container/post-list";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef && inputRef.current) inputRef.current.focus(); // Фокус на введенні після завантаження компс
  }, []);

  return (
    <Page>
      <Grid>
        <Box>
          <input ref={inputRef} placeholder="Введіть пошту..." />
        </Box>
        <Box>
          <input placeholder="Введіть пароль..." />
        </Box>
      </Grid>
    </Page>
  );
}
export default App;
