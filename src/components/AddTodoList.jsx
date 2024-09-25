import React, {useState} from "react";
import {postTodoListFetch} from "../clients/TodoTaskClient";


const AddTodoList = () => {
    const [taskName, setTaskName] = useState("");


    const addTask = (e) => {
        e.preventDefault(); // Prevent form submission from reloading the page
        if (taskName.trim() !== "") {
            postTodoListFetch("http://localhost:8080/lists",{name: taskName})
            setTaskName(""); // Clear the input field after adding
        }
    };

    return (
        <>
            <p> Inputish </p>
            <form onSubmit={addTask}>
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

export default AddTodoList
