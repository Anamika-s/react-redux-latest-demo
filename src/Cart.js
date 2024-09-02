import { legacy_createStore } from '@reduxjs/toolkit';
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react'
import { ReactReduxContext } from 'react-redux';

export default class Cart extends Component {
    /**
     *
     */
    constructor(props) {
        super(props);
        this.state=
        {
    price: this.props.price
        }
    console.log("constructor of cart called")
        
    }
  render() {
    console.log("render cof cart calld")
    return (
      <div>Cart
<button onClick={this.update}> Update </button>

      </div>
    )
  }

  componentDidMount()
  {
    console.log("componentDidMount of Cart called")
  }

  static getDerivedStateFromProps (props, state) 
  {
    console.log("getDerivedStateFromProps cart called")
    if(props.price!=state.price)
        return {price:props.price};
  return null;
  }
componentDidUpdate(prevProps, prevState) { 
    console.log("componentDidUpdate of cart called")
    if(this.props.productId!= prevProps.productId)
    {
console.log("prev props " + prevProps.price);
console.log("prev state " + prevState.price )
    }
} 

update=()=>
{
 this.setState({qty:this.state.qty+10});    
}

shouldComponentUpdate(nextProps, nextState)
{
     if(this.props.price !== nextState.price) 
     {
        console.log("shouldComponentUpdate called") 
        return true;
         }
         else 
         return false;  
}

componentWillUnmount()
{
    console.log("componentWillUnmount of cart called")
    console.log("cart has been removed");
}
}
