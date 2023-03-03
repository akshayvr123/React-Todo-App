import { useState } from "react"
import Employee from "./Employee"
function App() {
  //Array destructuring
  //Eg:const arr=[1,2,3,4]
  //Eg:const [one,two,three,four]=arr
  //now one=1 two=2 three=3...
  //setCount is a function
  //useState(0)=>assume that setting a variable and giving it a value 0
  const [count,setCount]=useState(0)
  
  const addCount=()=>{
    setCount(count+1)
    console.log(count)
  }
 let emp=[{name:"Akshay" ,age:19},{name:"Anoop",age:21},{name:"musk",age:22}]
  return (
   <div >
      <button onClick={addCount}>Add</button>
      {
        emp.map((obj,index)=>{
          return(
            <Employee key={index} {...obj}/>
          )
          //we can remove the { } in arrow function and what ever we write aafter that will be returned


        })
      }
   </div>
  );
}

export default App;
