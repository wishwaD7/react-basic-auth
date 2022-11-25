import React from 'react';
import './App.css'
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom'

// Layout Pages & Components
import Navbar from './Components/Navbar/Navbar';
import Pages from './Pages/Pages';
import Footer from './Components/Footer/Footer';

const { Content } = Layout;

const App = () => (
  <div className="App container">
    <Router>
      <Layout>
        <Navbar />
        <Content><Pages /></Content>
        <Footer />
      </Layout>
    </Router>
  </div>
);


export default App;
