import React,{useState,useEffect} from 'react'

function Counter() {
  const [count,setCount]= useState(0)
  const [count2,setCount2]= useState(0)
    useEffect(()=>{
        console.log("mounting") //Mounting/updating
        console.log("coount 1"+count)
        console.log("counter2"+count2)
        return()=>{
        console.log("Unmounting")}
    },[count,count2])
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
         <h1>Hello I am coomponent : {count}</h1>

         <button onClick={()=>setCount2(count2+1)}>Increment</button>
         <h1>Couter 2nd : {count2}</h1>
    </div>
  )
}

export default Counter


//video 16 min