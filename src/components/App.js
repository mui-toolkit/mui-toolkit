import React from 'react';
import Header from '../components/ui/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Learn from './Learn';
import Login from './Login';
import Signup from './Signup';
import Build from './build/Build';
import Test from './Test';
import auth from './auth';
import firebase from 'firebase';
import 'firebase/auth';

firebase.auth().onAuthStateChanged(user => {
  console.log('user', user);
  if (user) {
    console.log('user logged in:', user);
  } else {
    console.log('user logged out');
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/learn" component={Learn} />
          <Route exact path="/design" component={Build} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={() => <div>logout</div>} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/auth" component={auth} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
