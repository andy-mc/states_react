import React from "react";
import {UseStateReducer} from './UseStateReducer.js'; 
import {UseState} from './UseState.js'; 
import {ClassState} from './ClassState.js'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <UseStateReducer name="UseStateReducer prop" />
      <UseState name="UseState prop" />
      <ClassState name="ClassState prop" />
    </div>
  );
}

export default App;
