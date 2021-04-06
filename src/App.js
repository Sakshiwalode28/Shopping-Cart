import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

import {Container, Row, Col} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';


import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart'


function App() {
  const [cartItem , setCartItem] = useState([]);

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array) { return array.index === item.id})
    //method to add item in cart


    //if item is already added to cart   
    //if item is already in the cart it will return any index but not -1
    if (isAlreadyAdded !== -1) {
      toast('Item is Already added in Cart', { type: 'error' })
  return;
    };
      //add item to cart
      setCartItem([...cartItem, item])
  }
    
      //to buy a item
     const buyNow = () => {
        setCartItem([]);

        toast('Purchase Complete' , { type: 'success' })
      }


      //to remove any item from list
      const removeItem = item => {
        setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
      }
      return (
        <div className='App'>
        <Container fluid>
         
            <Row>
              <Col md={8}> <BuyPage addInCart={addInCart} /></Col>
  
              <Col md={4}> <Cart cartItem={cartItem} buyNow={buyNow} removeItem={removeItem}/></Col>
            </Row>
       <ToastContainer/>
        </Container>
        </div>
  
      )
  }
  export default App;