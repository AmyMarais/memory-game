import './App.css';
import React, {Component} from 'react';
import Header from './Components/Header';
import Landingpage from './Components/LandingPage';
import Product from './Components/Product';

const loggedIn = true;
//array of product items
const products = [{id: "1", product_name: "coffee", price: "R22", 
id: "2", product_name: "cappuccino", price: "R25", 
id:"3", product_name: "vanilla latte", price: "R26"} ]


function App(){
    return (
<>
      <Header name="Joe" loggedIn={loggedIn}/>
      <Landingpage></Landingpage>
      <Product products={products}/>
      </>
    );
}


export default App;
