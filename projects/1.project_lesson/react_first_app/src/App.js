import './App.css';
import Header from "./components/Header/Header.js"
import NavBar from "./components/Navigation/Nav.js"

import Profile from "./components/Profile/Profile.js"
import Dialogs from "./components/Dialogs/Dialogs.js"
import News from './components/News/News.js';
import Music from './components/Music/Music.js';
import Settings from './components/Settings/Settings.js';

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;
