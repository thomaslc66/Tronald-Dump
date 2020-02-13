import React, { Component } from 'react';
import MainComponent from './MainComponent';
import { Switch, Route } from 'react-router-dom';
import SavedQuotes from './SavedQuotesComponent';

class RouterComponent extends Component {
  state = {
    routes: [
      { path: '/quotes', component: <SavedQuotes></SavedQuotes> },
      { path: '/about', component: <div>About</div> },
      { path: '/', component: <MainComponent></MainComponent> }
    ]
  };
  render() {
    return (
      <Switch>
        {this.state.routes.map(route => {
          return <Route path={`${route.path}`}>{route.component} </Route>;
        })}
      </Switch>
    );
  }
}

export default RouterComponent;
