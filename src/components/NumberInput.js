import * as React from 'react';
import "./style.css"; 
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";

export default function QuantityInput({ value, onChange }) {


  const handelMinus = ()=>{
    if(value > 1){
      let newN = value-1;
      onChange(newN);
    }
    
  }

  const handelPlus = ()=>{
    let newN = value+1;
    onChange(newN);
  }

  return (
    <div className='number-input flex'>
        <LuMinus className='minus pointer' onClick={handelMinus}/>
        {value}
        <GoPlus className='plus pointer' onClick={handelPlus}/>
    </div>
  )
  
}

