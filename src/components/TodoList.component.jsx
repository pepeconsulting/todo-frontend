import React, {useEffect, useState} from "react";
import {getTodoListFetch, postTodoListFetch} from "../clients/TodoTaskClient";
import NewTodoListComponent from "./NewTodoList.component";
import TodoComponent from "./Todo.component";




const TodoListComponent = () => {
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
            <NewTodoListComponent resetTodoList={resetTodoList}></NewTodoListComponent>
            <p>Map</p>
            {todoList && todoList.map((object, index) =>
                <TodoComponent key={index} todolist={object} resetTodoList={resetTodoList}/>
            )}
        </div>
    )
}

export default TodoListComponent
