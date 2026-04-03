import { useState } from 'react';

function Todo() {
    const [newTodo, setNewTodo] = useState("");
    const [todo, setTodo] = useState([]);

    const submitFunction = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            setTodo([...todo, { text: newTodo, completed: false }]);
            setNewTodo(""); // Clears input after submit
        }
    };

    const deleteFunction = (index) => {
        // Filters out the item at the specific index
        const updatedTodos = todo.filter((_, i) => i !== index);
        setTodo(updatedTodos);
    };

    return (
        <div id="todoDiv">
            <h1 id="todoH1">Todo App</h1>
            
            {/* Form should wrap the input and submit button */}
            <form onSubmit={submitFunction}>
                <input 
                    id="inpuBox" 
                    type="text" 
                    placeholder="Enter your Todo" 
                    value={newTodo} 
                    onChange={(e) => setNewTodo(e.target.value)} // Added 'e' here
                />
                <button id="submitBtn" type="submit">Submit</button>
            </form>

            <div id="todoList">
                <ul>
                    {todo.map((item, index) => (
                        <li key={index}>
                            <span>{item.text}</span>
                            <button onClick={() => deleteFunction(index)} className="deleteBtn">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;