import React,{useState} from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css';

import {Container,Row,Col} from "reactstrap";
import {ToastContainer,toast} from "react-toastify";

import Buypage from './components/buypage'; 
import Cart from "./components/cart";


function App() {
  const [cartItem,setCartItem]=useState([]);

  const addInCart= item => {
    const isAlradyAdded=cartItem.findIndex(function(array){
      return array.id===item.id;

    });
    if(isAlradyAdded!== -1){
      toast("already added in cart",{
        type:"error"
      });
      return;
    }

    setCartItem([...cartItem,item]);
  };

  const buyNow = () => {
    setCartItem([])
    toast("purchase Complete",{
      type:"success"
    });
  };

  const removeItem = item =>{
    setCartItem(cartItem.filter(singleItem=>singleItem.id!==item.id))
  };
  return (
    <Container fluid>
      <ToastContainer/>
      <Row>
        <Col md="8">
          <Buypage addInCart={addInCart}/>
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
