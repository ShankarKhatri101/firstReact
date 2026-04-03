import { useState } from 'react'

function Todo() {
    const [newTodo, setNewTodo] = useState("Need to code")
    const [todo, setTodo] = useState([])
    function submitFunction(){}
    function deleteFunction(){}

    function editFunction(){}
    return (
        <div id="todoDiv">
            <h1 id="todoH1">Todo App</h1>
            <div >
                <input id="inpuBox" type="text" placeholder="Enter your Todo" />
                <button id="submitBtn" onClick={submitFunction} value={newTodo} >Submit</button>
            </div>
            <div id="todoList">
                <ul>
                    <li>{newTodo} <div><button className="deleteBtn">Delete</button> <button className="editTodo">Edit</button></div> </li>
                    <li>{newTodo} <div><button className="deleteBtn">Delete</button> <button className="editTodo">Edit</button></div></li>
                    <li>{newTodo} <div><button className="deleteBtn">Delete</button> <button className="editTodo">Edit</button></div></li>
                    <li>{newTodo} <div><button className="deleteBtn">Delete</button> <button className="editTodo">Edit</button></div></li>
                    <li>{newTodo} <div><button className="deleteBtn">Delete</button> <button className="editTodo">Edit</button></div></li>
                </ul>
            </div>
        </div>
    )
}
export default Todo;
