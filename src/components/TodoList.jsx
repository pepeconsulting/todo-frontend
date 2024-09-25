import React, {useEffect, useState} from "react";
import {getTodoListFetch} from "../clients/TodoTaskClient";


const TodoList = () => {
    const [todoList, setTodoList] = useState()

    useEffect(() =>{
        setTodoList(getTodoListFetch("http://localhost:8080/lists"))
    },[])


    console.log(todoList)
    return(
        <p>Todo list</p>
    )
}

export default TodoList
