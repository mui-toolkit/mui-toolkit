import React, { useState, useEffect } from "react";
import Header from "../components/ui/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Learn from "./Learn";
import Login from "./Login";
import Signup from "./Signup";
import ThemesTable from "./ThemesTable";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
import { Auth } from "./auth";
import firebase from "firebase";
import "firebase/auth";
import { Store } from "./build/";
import WebPreview from "../WebPreview/WebPreview";
import Explore from "./Explore";
import GridBuilder from "./GridBuilder/GridBuilder";

const defaultUser = {
  loggedIn: false,
  email: '',
  uid: ''
};
function onAuthStateChange(callback) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      user.getIdTokenResult().then(idTokenResult => {
        user.admin = idTokenResult.claims.admin;
        // console.log('user in onAuth', user.admin);
        // console.log('idToken', idTokenResult);
        callback({
          loggedIn: true,
          email: user.email,
          uid: user.uid,
          admin: user.admin
        });
      });
    } else {
      callback({ loggedIn: false });
    }
  });
}

function App() {
  const [user, setUser] = useState({ loggedIn: true });
  useEffect(() => {
    // do equivalent of unsubscribe
    const unsubscribe = onAuthStateChange(setUser);
    // return async () => {
    //   await unsubscribe();
    // };
  }, []);

  console.log("App -> user", user);

  return (
    <BrowserRouter>
      <Header user={user} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/design" component={() => <Store user={user} />} />
        <Route
          render={props => <Store {...props} />}
          exact
          path="/design/:themeId/:signedInUserId"
        />
        <Route
          render={props => <WebPreview {...props} />}
          exact
          path="/webpreview/:themeId"
        />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/grid" component={GridBuilder} />
        {!user.loggedIn && (
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        )}

        {user.loggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route
              render={props => <Store {...props} />}
              exact
              path="/design/:themeId/:signedInUserId"
            />
            <Route
              exact
              path="/dashboard"
              component={() => <Dashboard user={user} />}
            />

            <Route exact path="/themestable" component={ThemesTable} />

            <Route exact path="/userprofile" component={UserProfile} />

            {user.admin && <Route exact path="/admin" component={Auth} />}

            {/* <Route exact path="/admin" component={() => <Auth user={user} />} /> */}
          </Switch>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
