import React from 'react';
import Header from '../components/ui/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Learn from './Learn';
import Login from './Login';
import Signup from './Signup';
import Start from './Start';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/learn' component={Learn} />
          <Route exact path='/start' component={Start} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={() => <div>logout</div>} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
