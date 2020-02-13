import React, { Component } from 'react';
import Search from 'antd/lib/input/Search';
import { Row, Col, Button } from 'antd';
import { displayAllTag } from '../services/request';

class Home extends Component {
  state = {};
  render() {
    return (
      <Row align='middle'>
        <Col span={12} offset={6}>
          <Search className='searchBar'></Search>
          <Button onClick={() => displayAllTag()}>Tag</Button>
        </Col>
      </Row>
    );
  }
}

export default Home;
