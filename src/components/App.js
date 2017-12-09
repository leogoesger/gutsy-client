/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Colors} from '../styles/Colors';
import Home from '../containers/Home';
import SignUp from '../containers/SignUp';
import Login from '../containers/Login';
import Climb from '../containers/Climb';

class App extends React.Component {
  render() {
    const muiTheme = getMuiTheme({
      palette: {},
      snackbar: {actionColor: Colors.orange},
    });
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/route/:id" component={Climb} />
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
