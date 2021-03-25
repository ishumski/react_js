import './App.css';
import Header from "./components/Header/Header.js"
import NavBar from "./components/Navigation/Nav.js"

import Profile from "./components/Profile/Profile.js"
import Dialogs from "./components/Dialogs/Dialogs.js"
import News from './components/News/News.js';
import Music from './components/Music/Music.js';
import Settings from './components/Settings/Settings.js';
import Friends from './components/Friends/Friends';

import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
          />} />

          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogPage} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/friends" render={() => <Friends />} />
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;
