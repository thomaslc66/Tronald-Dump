import React from 'react';
import './App.css';
import Layout from './layout/layout';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout></Layout>{' '}
    </Router>
  );
}

export default App;
