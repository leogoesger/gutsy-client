/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from '../containers/Home';
import SignUp from '../containers/SignUp';
import Login from '../containers/LogIn';

class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
