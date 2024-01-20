import { useState } from "react";



function App() {

  const [inputValue, setInputValue] = useState()
  const [submit, setSubmit] = useState([])

  const add = ()=>{
    
    setSubmit([...submit, inputValue])
  }

  

  return (
    <div className="App">
      <div>TODO LIST</div>
      
      <form>
        <div>
          <input type="text" value={inputValue} placeholder="Add Item" onChange={(e)=>setInputValue(e.target.value)}></input>
          <button onClick={add}>Add Item</button>
        </div>
        <hr />

        <div>
          <h2>Todo List</h2>
          <ul>
            <li>
              <input type="checkbox" id="todo1"/>
                  <label for="todo1">{submit}</label>
                  <button >Delete</button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default App;
