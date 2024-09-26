import React, {useEffect, useState} from "react";
import {getTodoListFetch, postTodoListFetch} from "../clients/TodoTaskClient";
import NewTodoList from "./NewTodoList";


const TodoList = () => {
    const [todoList, setTodoList] = useState([])

    const resetTodoList = () => {
        updateList()
    }

    useEffect(() => {
        updateList()
    }, [])

    const updateList = () => {
        getTodoListFetch("http://localhost:8080/lists")
            .then(data => setTodoList(data))
    }



    return (
        <div className={"todo-list"}>
            <NewTodoList resetTodoList={resetTodoList}></NewTodoList>
            <p>Map</p>
            {todoList && todoList.map((object, index) =>
                <li key={index}>{object.name}</li>)
            }
        </div>
    )
}

export default TodoList
