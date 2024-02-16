import React from 'react';
import Info from '../src/components/Info';
import About from './components/About';
import Interest from '../src/components/Interest';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="card-container">
        <div className="card">
          <Info />
          <About />
          <Interest />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
