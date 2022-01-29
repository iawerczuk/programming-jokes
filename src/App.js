import './App.css';
import React from 'react';
// import axios from "axios";
import Joke from './Components/Joke';
import RandomJoke from './Components/RandomJoke';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Joke/>
      <RandomJoke/>
      <Footer/>
    </div>
  );
}

export default App;