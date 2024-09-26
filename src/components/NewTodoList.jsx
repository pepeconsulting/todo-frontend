import React, {useState} from "react";
import {postTodoListFetch} from "../clients/TodoTaskClient";


const NewTodoList = ({resetTodoList}) => {
    const [taskName, setTaskName] = useState("");

    const addNewTodoList = (e) => {
        e.preventDefault(); // Prevent form submission from reloading the page
        if (taskName.trim() !== "") {
            postTodoListFetch("http://localhost:8080/lists",{name: taskName}).then(() =>{
                resetTodoList()
            })
            setTaskName(""); // Clear the input field after adding
        }
    };

    return (
        <>
            <p>Input</p>
            <form onSubmit={addNewTodoList}>
                <input
                    type="text"
                    placeholder="Enter list name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <button type="submit">Add List</button>
            </form>
        </>
    )

}

export default NewTodoList
