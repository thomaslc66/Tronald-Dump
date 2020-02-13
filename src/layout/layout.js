import React, { Component } from 'react';
import RouterComponent from '../components/Router';
import MenuComponent from '../components/MenuComponent';

class Layout extends Component {
  state = {};
  render() {
    return (
      <div>
        <MenuComponent />
        <RouterComponent />
      </div>
    );
  }
}

export default Layout;
