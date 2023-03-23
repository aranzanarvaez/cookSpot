
import React, { useEffect, useState } from "react";
import Axios from "axios";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Receta from "./components/Receta"
import Tabs from './components/tabs';
import Header from './components/Header';
import Recetas from "./components/Recetas";
import Recipe from "./components/Recipe";
import { NavLink } from "react-router-dom";




function App() {


  const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=e0bdc9565d104e2ea5a80893da61d2be&query=${searchQuery}';
  const getData = async () => {
    const result = await Axios.get(url);
    console.log(result);

    
  };

 
  return (
    
    <div className="App">
      <Header />

      <Tabs />
     
    </div>
  );
}

export default App;
