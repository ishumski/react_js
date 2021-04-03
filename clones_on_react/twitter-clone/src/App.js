import React from "react";
import Sidebar from "../src/components/Sidebar.js"
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar text="Home" />
      <Sidebar text="Explore" />
      <Sidebar text="Notifications" />
      <Sidebar text="Messages" />
      <Sidebar text="Bookmarks" />
      <Sidebar text="Lists" />
      <Sidebar text="Profile" />
      <Sidebar text="More" />
    </div>
  );
}

export default App;
