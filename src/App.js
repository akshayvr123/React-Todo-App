import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
  const [toDos,setTodos] = useState([])
  const [toDo,setToDo]=useState('')
  const d=new Date()
  const day=d.getDay()
  let weekdays=['Sunday','Monday','Tuesday',"Webnesday","Thursday",'Friday','Saturday']
  return (
    
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {weekdays[day]} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>
        {  if(toDo==""){
            alert('enter some text')
          }else{
          setTodos([...toDos,{ id:Date.now() ,text: toDo,status:false}])}}} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      
        {
          toDos.map((obj)=>{

         
        return (<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              
              console.log(e.target.checked)
            console.log(obj)
             setTodos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
             }))
          }}
              value={obj.status}
              type="checkbox" name="" id="" />
            <p>{obj.text}</p>
            <h1>Active Task</h1>
          </div> 
          <div className="right">
          <i id={obj.id} className="fas fa-times" onClick={(e)=>{
              let index= toDos.findIndex(obj=>{return obj.id==e.target.id})
              if (index !== -1) {
                toDos.splice(index, 1);
                setTodos([...toDos]);
              }
            }}>
</i>

          </div>
        </div>)
         })}
        {
          toDos.map((obj)=>{
            if(obj.status){
              return( <h1>{obj.text}</h1>)
            }
            return null
          })
        }
      </div>
    </div>
  );
}

export default App;