// import React, { useState } from 'react'
// import { useSearchParams } from 'react-router-dom'

// export const UseMemo = () => {
//     const [num1, setNum1] = useState(10);
//     const [num2, setNum2] = useState(100);
//     const Multiply = () =>{
//          console.log("multiply");
//          return num2 * 5;
//     }
//   return (
//     <div>UseMemo 
//         <br/>
//         <b> Num1 {num1} </b>
//         <button onClick={()=> setNum1(num1+10)}> Update Num1 </button>
// <br/>
// {Multiply()}
// <button onClick={()=> setNum2(num2+100)}> Update Num2 </button>
//  <b> Num2 {num2} </b>
//     </div>
//   )
// }


import React, { useMemo, useState } from 'react'
 

export const UseMemo1 = () => {
    const [num1, setNum1] = useState(10);
    const [num2, setNum2] = useState(100);
    const Multiply =  useMemo(() =>{
         console.log("multiply");
         return num2 * 5;
    },[num2])
  return (
    <div>UseMemo 
        <br/>
        <b> Num1 {num1} </b>
        <button onClick={()=> setNum1(num1+10)}> Update Num1 </button>
<br/>
{Multiply}
<button onClick={()=> setNum2(num2+100)}> Update Num2 </button>
 <b> Num2 {num2} </b>
    </div>
  )
}

