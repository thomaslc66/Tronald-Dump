import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

class MenuComponent extends Component {
  state = {
    menu: [
      { icon: 'home', link: 'home', text: 'Home' },
      { icon: 'appstore', link: 'quotes', text: 'Saved Quotes' },
      { icon: 'question', link: 'about', text: 'About' }
    ]
  };

  renderMenuValue = param => {
    return (
      <Menu.Item key={`${param.link}`}>
        <Link to={`/${param.link}`}>
          <div className='text-menu'>
            <Icon type={`${param.icon}`} />
            {`${param.text}`}
          </div>
        </Link>
      </Menu.Item>
    );
  };

  render() {
    return (
      <Menu
        className='menu'
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode='horizontal'
      >
        {this.state.menu.map(val => this.renderMenuValue(val))}
      </Menu>
    );
  }
}

export default MenuComponent;
