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
console.log('this is to do list',todoList)


    return (
 
        <div className="w-full flex flex-col justify-center items-center">
            <NewTodoListComponent resetTodoList={resetTodoList}></NewTodoListComponent>
            {todoList && todoList.map((object, index) =>
                <TodoComponent key={index} todolist={object} resetTodoList={resetTodoList}/>
            )}
        </div>
    )
}

export default TodoListComponent
