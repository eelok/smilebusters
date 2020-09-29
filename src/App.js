import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from "./pages/homepage-component";


function App() {
  return (
    <div className="App">
      <Route exact={true} path="/" component={HomePage}/>
    </div>
  );
}

export default App;
