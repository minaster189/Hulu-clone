import React, { useState } from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Results from './Components/Results';
import Footer from './Components/Footer';
import requests from './requests';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  
  return (
    <div className="app">
      {/* Header */}
      <Header/>
      {/* Nav */}
      <Nav setSelectedOption={setSelectedOption}/>
      {/* Results */}
      <Results selectedOption={selectedOption}/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
