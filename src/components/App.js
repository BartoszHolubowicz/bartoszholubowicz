import React, { Component } from 'react';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
