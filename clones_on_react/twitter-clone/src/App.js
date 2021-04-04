import React from "react";
import './App.css';

import Sidebar from "./components/Sidebar/Sidebar.js";
import Feed from "./components/Feed/Feed.js";
import Widgets from "./components/Widgets/Widgets";


function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
