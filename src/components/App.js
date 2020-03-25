import React from "react";
import Header from "../components/ui/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Learn from "./Learn";
import Login from "./Login";
import Signup from "./Signup";
import UsersThemes from "./UsersThemes";
import ThemesTable from "./ThemesTable";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
import { Auth } from "./auth";
import firebase from "firebase";
import "firebase/auth";
import { Store } from "./build/";

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (user) {
    console.log("user logged in:", user);
  } else {
    console.log("user logged out");
  }
});

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/design" component={Store} />
        <Route
          render={props => <Store {...props} />}
          exact
          path="/design/:savedTheme"
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/usersthemes" component={UsersThemes} />
        <Route exact path="/themestable" component={ThemesTable} />

        <Route exact path="/userprofile" component={UserProfile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
