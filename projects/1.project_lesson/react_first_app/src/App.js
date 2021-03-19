import './App.css';
import Header from "./components/Header/Header.js"
import NavBar from "./components/Navigation/Nav.js"
// import Profile from "./components/Profile/Profile.js"
import Dialogs from "./components/Dialogs/Dialogs.js"


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      {/* <Profile /> */}
      <div class="app-wrapper-content">
        <Dialogs/>
      </div>
    </div>
  );
};


export default App;
