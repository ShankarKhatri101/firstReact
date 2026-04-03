import {useState} from 'react'

function ToggleText() {
    let [x,setX]=useState(true)
    function showhide(){
        setX(!setX)
    }
  return (
    <div>
        <button onClick={showhide}>{x?"Hide":"Show"}</button>
    </div>
  )
}

export default ToggleText

                    {/* <li>{newTodo} <div><button className="deleteBtn">Delete</button> <button className="editTodo">Edit</button></div> </li>
                    <li>{newTodo} <div><button className="deleteBtn">Delete</button> <button className="editTodo">Edit</button></div></li>
                    <li>{newTodo} <div><button className="deleteBtn">Delete</button> <button className="editTodo">Edit</button></div></li>
                    <li>{newTodo} <div><button className="deleteBtn">Delete</button> <button className="editTodo">Edit</button></div></li>
                    <li>{newTodo} <div><button className="deleteBtn">Delete</button> <button className="editTodo">Edit</button></div></li> */}