import React,{useState} from 'react'

export default function Test() {
   
    const [count ,setCount]=useState(2)
    const Increment=()=>{
        setCount(count*2);
    };
    const Decrement=()=>{
        setCount(count*5);
    };




    return (
        <div>
            <button onClick={Increment}>Increment</button>
            <span>{count}</span>
            <button onClick={Decrement}>Deccrement</button>
        </div>
    )
}
