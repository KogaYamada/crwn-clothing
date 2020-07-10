import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import HomePage from "./pages/homepage/Homepage.component";

const HatsPage = () => (
  <div>
    <h1>hatsPage</h1>
  </div>
);

const TopckList = () => (
  <div>
    <h1>Topic List Page</h1>
  </div>
);

const TopicDetail = () => (
  <div>
    <h1>Topic Detail Page</h1>
  </div>
);

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
      <Route exact path="/topics" component={TopckList} />
      <Route path="/topics/:topicId" component={TopicDetail} />
    </>
  );
}

export default App;
