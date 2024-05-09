import React from 'react';
import './App.css';
import Main from './components/Main/index';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
