// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ToDoLists from './ToDoLists';

function App() {
  const [inputList, setinputList]= useState("");
  const [items, setitems] = useState([])

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };

  const listOfItems = ()=> {
  setitems((olditem)=>{
    return [...olditem,inputList];
  });
  setinputList("")
  };
  const deleteItems = (id)=> {
    console.log("deleted")
    setitems((olditem)=>{
      return olditem.filter((arrElem,index)=>{
        return index !== id;
      })
    })
  }
  return (
   <>
   <div className='main_div'>
    <div className='center_div'>
      <br/>
      <h1>To do list (By Kalpesh)</h1>
      <br/>
      <input type="text" value={inputList}  placeholder='Add a items'  onChange={itemEvent}/>
      <button onClick={listOfItems}>+</button>
      <ol>
      
         {/* {inputList} */}
         {
          items.map( (itemval,index)=> {
              return <ToDoLists text={itemval}  
              key={index}
               id={index}
               onSelect={deleteItems}
               />
          })
         }
      
      </ol>
    </div>
   </div>
   </>
  );
}

export default App;
