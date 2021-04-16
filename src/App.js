import React from 'react'
import Navbar from "./Navbar"
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="content">
        <h1>My Portfolio test</h1>
      </div>
    </div>
  );
}

export default App;
