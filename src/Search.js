import React from 'react'
import { useParams } from 'react-router-dom'
export const Search = () => {
    let {id, category} = useParams();

  return (
    <div> Search 

        <h1> Id rec is {id} & category is {category} </h1>
    </div>
    
  )
}
