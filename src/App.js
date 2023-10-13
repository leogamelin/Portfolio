import React from 'react';
import './App.scss';
import Header from "../src/components/Header";
import Presentation from "../src/components/Presentation";
import Portfolio from "../src/components/Portfolio";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
