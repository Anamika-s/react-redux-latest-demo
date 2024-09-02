import React from 'react'
import { useSelector } from 'react-redux'
import { deposit, withdraw } from '../actions/AmountSlice';
import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
export const Shop = () => {
  const amount = useSelector((state) => state.amount.value)
const dispatch = useDispatch();

// const {deposit, withdraw} = bindActionCreators(
//     {deposit, withdraw},dispatch);

  return (
    <div>Shop Component

        <h1> {amount} </h1>

        <button onClick={()=>(dispatch(withdraw(100)))}>  Withdraw </button>
     
        <button onClick={()=>(dispatch(deposit(100)))}>  Deposit </button>
    
    {/* <button onClick={()=>deposit(100)}>  Withdraw </button>
     
     <button onClick={()=>withdraw(100)}>  Deposit </button> */}
 
    </div>
  )
}
