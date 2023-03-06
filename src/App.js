import Counter from "./Counter";
import { useState } from "react";
function App() {

  const [state,setState]=useState(false)
   return (
   <div >
       <h1 onClick={()=>setState(!state)}>Hello World</h1>
      { state ? <Counter/> : null}

   </div>
  );
}

export default App;
