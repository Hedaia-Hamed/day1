import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const Todolist= () => {



    const [myinput , setMyInput] = useState('');  
    const [mylist , setMylist] = useState([]);
    const [selectedInput, setSelectedInput] = useState(null)
    const [editInput , setEditInput ] = useState(null)
    const [error, setError] = useState(false)

    const inputtoList = (value) => {
        setMyInput(value);
    }

    const addtoList = () => {
        if (myinput.trim() !== ''){
            setMylist([...mylist, { id: uuidv4(), name:myinput}]);
            setMyInput('');
        }
        
    }


    const getSelectinput = (value) => {
        setSelectedInput(value);

    }


    const updatetSelectinput = (value) => {

        setMylist((mylist) =>
          mylist.map((item) =>
            item.id === selectedInput.id ? { ...item, name: value } : item
          )
        );
        setSelectedInput(null);
        setEditInput(null); 
      }


    const listDeleteItem = (value) =>{
        const updatedlist = mylist.filter((list) => list.id !== value);
        setMylist(updatedlist);
        setSelectedInput(null); 

    }



   
  
    return (
      <div>
       <h1>  My Todo List</h1>
        <input
          type="text"
          value={myinput}
          onChange={(e) => inputtoList(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={addtoList}>Add</button>
        <ul>
          {mylist.map((task) => (
            <li key={task.id}>
              {selectedInput && selectedInput.id === task.id ? (
              <> <input
                  type="text"
                  value={editInput !== null ? editInput : task.name}
                  onChange={(e) => setEditInput(e.target.value)}
                />
                 <button onClick={() => updatetSelectinput(editInput)}>Update</button>
                </>
              ) : (
                <span onClick={() => getSelectinput(task)}>{task.name}</span>
              )}
            
              <button onClick={() => listDeleteItem(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }



export default Todolist;