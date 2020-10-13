import React from 'react';
import './App.css';
import Listing from "./components/Listing/Listing";
import items from "./components/Listing/etsy.json"



function App() {
  return (
      <Listing items={items} />
  );
}

export default App;
