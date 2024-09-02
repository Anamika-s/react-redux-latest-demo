import { copyWithStructuralSharing } from '@reduxjs/toolkit/query';
import React, { useEffect, useState } from 'react'

export const UseState = () => {
    const [num1, setNum1] = useState(10);
    const [num2, setNum2] = useState(100);
    useEffect (()=>
    {
    console.log("useEffect")
    
    },[num1])
    
  return (
    <div>UseState
        <h1> Num1  {num1} </h1>
        <h2> Num2  {num2} </h2>
<button onClick={()=> setNum1(num1+10)}> Update Num1 </button>

<button onClick={()=> setNum2(num2+100)}> Update Num2 </button>

    </div>
  )
}
