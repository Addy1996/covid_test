import React, { Component } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Article from './components/Article';
import './App.css';
import { useMediaQuery } from 'react-responsive';

class App extends Component {
  render(){
    return(
      <div >
          <Header/>
          <Section/>
          
      </div>
    )
  }
}

export default App;