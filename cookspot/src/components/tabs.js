import React, { useEffect, useState } from "react";



//import {MdOutlineIcecream} from 'react-icons/md'

function Tabs() {
    const[foodF, setFood] = useState([]);
    const[meal, setMeal ]= useState([]);
    const[breakFast, setBreakFast] = useState([]);
    const[dinner, setDinner] = useState([]);
    useEffect (() =>{
        getBreakfast();
        
      },[]);
    useEffect (() =>{
        getRandom();
        
      },[]);
    useEffect (() =>{
        getMeal();
        
      },[]);
      useEffect (() =>{
        getDinner();
        
      },[]);

    const getRandom = async () =>{
        const api1 = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=e0bdc9565d104e2ea5a80893da61d2be&type=snack')
        const data1 = await api1.json();
        console.log(data1);
        setFood(data1.results)
    };
    
    const getBreakfast = async () =>{
        const api = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=e0bdc9565d104e2ea5a80893da61d2be&type=breakfast')
        const data = await api.json();
        console.log(data);
        setBreakFast(data.results)
    };

    const getMeal = async () =>{
        const api3 = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=e0bdc9565d104e2ea5a80893da61d2be&type=maincourse')
        const data3 = await api3.json();
        console.log(data3);
        setMeal(data3.results)
    };
    const getDinner = async () =>{
        const api4 = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=e0bdc9565d104e2ea5a80893da61d2be&type=dinner')
        const data4 = await api4.json();
        console.log(data4);
        setDinner(data4.results)
    };
    return (
        
      <div>
         <section id="menu" className="bg-light mb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 intro-text">
                    <h1>Explora nuestras recetas</h1>
                    <p>Tenemos una gran variedad de recetas que te van a encantar. Además, podrás ver qué supermercados se encuentran cerca de ti para que puedas comprar los ingredientes.</p>
                    <div className="h-search-form mt-4">
                        <form action="#">
                            <input type="search" name="search" placeholder="Busca un platillo"/>
                            <button className="btn btn-brand">Buscar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <ul className="nav nav-pills mb-5 justify-content-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">Todas</button>
                 
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-breakfast-tab" data-bs-toggle="pill" data-bs-target="#pills-breakfast" type="button" role="tab" aria-controls="pills-breakfast" aria-selected="true">Desayunos</button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-lunch-tab" data-bs-toggle="pill" data-bs-target="#pills-lunch" type="button" role="tab" aria-controls="pills-lunch" aria-selected="true">Comidas</button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-dinner-tab" data-bs-toggle="pill" data-bs-target="#pills-dinner" type="button" role="tab" aria-controls="pills-dinner" aria-selected="true">Cenas</button>
                </li>

        </ul>
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
                <div className="row gy-4">
                    
                    <div className="menu-item bg-white shadow-on-hover">
                    {foodF && foodF.map((recipe1) => {
                        return(
                        <div key = {recipe1.id}> 
                            <img src={recipe1.image} className="img-fluid"></img>
                            <div className="menu-item-content p-4">
                                <h5 className="mt-1 mb-2">{recipe1.title}</h5>
                                
                         </div>
                            
                            </div>
                        );
                    })}
                    
                
                    </div>
                </div>
            </div>
            <div className="tab-pane fade show active"  id="pills-breakfast" role="tabpanel" aria-labelledby="pills-breakfast-tab" tabIndex="0">
            <div className="row gy-4">
            <div className="menu-item bg-white shadow-on-hover">
                    {breakFast && breakFast.map((recipe) => {
                        return(
                        <div key = {recipe.id}> 
                            <img src={recipe.image} className="img-fluid"></img>
                            <div className="menu-item-content p-4">
                                <h5 className="mt-1 mb-2">{recipe.title}</h5>
                                
                         </div>
                            
                            </div>
                        );
                    })}
                    
                
                    </div>
                </div>
            </div>
            <div className="tab-pane fade show active" id="pills-lunch" role="tabpanel" aria-labelledby="pills-lunch-tab" tabIndex="0">
            <div className="row gy-4">
            <div className="menu-item bg-white shadow-on-hover">
                    { meal && meal.map((recipe2) => {
                        return(
                        <div key = {recipe2.id}> 
                            <img src={recipe2.image} className="img-fluid"></img>
                            <div className="menu-item-content p-4">
                                <h5 className="mt-1 mb-2">{recipe2.title}</h5>
                                
                         </div>
                            
                            </div>
                        );
                    })}
                    
                
                    </div>
                </div>
            </div>
            <div className="tab-pane fade show active" id="pills-dinner" role="tabpanel" aria-labelledby="pills-dinner-tab" tabIndex="0">
            <div className="row gy-4">
            <div className="menu-item bg-white shadow-on-hover">
                    {dinner && dinner.map((recipe4) => {
                        return(
                        <div key = {recipe4.id}> 
                            <img src={recipe4.image} className="img-fluid"></img>
                            <div className="menu-item-content p-4">
                                <h5 className="mt-1 mb-2">{recipe4.title}</h5>
                                
                         </div>
                            
                            </div>
                        );
                    })}
                    
                
                    </div>
                </div>
            </div>
        </div>
        
        </div>

      </section>
      </div>
       
    )
}

export default Tabs