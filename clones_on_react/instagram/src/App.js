
import React, { useState, useEffect } from "react";
import './App.css';
import Post from './components/Post/Post.js';
import { auth, db } from "./firebase.js";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from "@material-ui/core";
import ImageUpload from "./ImageUpload.js";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [posts, setPost] = useState([]);

  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [user, setUser] = useState(null);



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //пользователь залогинился
        console.log(authUser);
        setUser(authUser);
      } else {
        //пользователь разлогинился
        setUser(null);
      }
    })
    return () => {
      unsubscribe();
    }
  }, [user, username])


  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => {
      setPost(snapshot.docs.map(doc => (
        {
          id: doc.id,
          post: doc.data()
        })
      ));
    })
  }, []);

  /*
      - auth мы берем из нашего firebase.js, где он был инициализорован
      - далее создаём  нового пользователя через этот длинный метод 
      .createUserWithEmailAndPassword(email, password), который двумя параметрами принимает
      в себя введённый email и password
      - если же есть какая-либо ошибка в ведённых данных, то через метод
      .catch((error) => alert(error.message)) выводим сообщение
      */
  const signUp = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username,
      })
    }).catch((error) => alert(error.message));

    setOpen(false);
  }

  const signIn = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password).catch((error) => alert(error.message))

    setOpenSignIn(false);
  }

  return (
    <div className="App">

      { user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <h3>Sorry you need to login to upload</h3>
      )}


      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}>

        <div style={modalStyle} className={classes.paper}>

          <form className="app_signUp">
            <center>
              <img className="app__signUpImg"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="" />
            </center>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            >
            </Input>
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            >
            </Input>

            <Button type="submit" onClick={signIn}>Sign In</Button>
          </form>

        </div>
      </Modal>

      <Modal
        open={open}
        onClose={() => setOpen(false)}>

        <div style={modalStyle} className={classes.paper}>
          <form className="app_signUp">
            <center>
              <img className="app__signUpImg"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="" />
            </center>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            >
            </Input>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            >
            </Input>
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            >
            </Input>

            <Button type="submit" onClick={signUp}>Sign Up</Button>
          </form>

        </div>
      </Modal>

      <div className="app__header">
        <img className="app__hederImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
      </div>

      {user ?
        (<Button onClick={() => auth.signOut()}>Logout</Button>) :
        (<div className="app__loginContainer">
          <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
          <Button onClick={() => setOpen(true)}>Sign Up</Button>
        </div>
        )

      }



      {
        posts.map(({ id, post }) => (
          <Post
            key={id}
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))
      }


    </div>
  );
}

export default App;
