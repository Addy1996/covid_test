import React, { Component } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Aside from './components/Aside';
import './App.css';

class App extends Component {
  render(){
    return(
      <div >
          <Header/>
          <Section />
          <Aside/>
      </div>
    )
  }
}
export default App;