import React, { Component } from 'react'
import Cart from './Cart';
import { validateYupSchema } from 'formik';
import { isClickableInput } from '@testing-library/user-event/dist/utils';

export default class Products extends Component {
    /**
     *
     */
    constructor(props) {
        super(props);
        console.log("constructor of Product class called ")
        this.state=
        {
            productId:"",
            price :0,
            isCart:true
        }
    }

    addToCart = (pid)=>
    {
        this.setState({productId:pid, price : this.state.price+1})
    }
    removeCart = ()=>
    {
        alert("remnove")
   this.setState({isCart:false})


    }
  render() {
    
    console.log("render cof product calld")
    return (
      <div>Products
        <button onClick={()=> this.addToCart(1)}> Add to Cart</button>
        <button onClick={()=> this.addToCart(2)}> Add to Cart</button>
        <button onClick={()=> this.addToCart(3)}> Add to Cart</button>
      
        <Cart productId={this.state.productId} price={this.state.price}/>
 <button onClick={this.removeCart}> Remove Cart </button>;
 {!this.state.isCart && <h2> Cart has been removed </h2>
 }
      </div>
    )
  }
}
