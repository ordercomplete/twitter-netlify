// import { lazy, useEffect, useState, Suspense } from "react";
import Page from "./component/page";
import PostList from "./container/post-list";

function App() {
  return (
    <Page>
      <PostList />
    </Page>
  );
}

export default App;
