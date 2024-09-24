import { useRef } from "react";
import Page from "./component/page";
import Grid from "./component/grid";
// import PostList from "./container/post-list";

function App() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollBy(ref) {
    console.log(ref);
    if (ref && ref.current) {
      const offsetTop = ref.current.offsetTop;
      window.scrollBy({ top: offsetTop, behavior: "smooth" });
    }
  }

  return (
    <Page>
      <Grid>
        <button onClick={() => handleScrollBy(firstCatRef)}>Tom</button>
        <button onClick={() => handleScrollBy(secondCatRef)}>Haru</button>
        <button onClick={() => handleScrollBy(thirdCatRef)}>Jellylorum</button>
      </Grid>
      <div>
        <ul style={{ display: "grid", gap: "500px", marginBottom: "500px" }}>
          <li>
            <img
              src="https://picsum.photos/200/200"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src="https://picsum.photos/300/200"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://picsum.photos/250/200"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </Page>
  );
}

export default App;
