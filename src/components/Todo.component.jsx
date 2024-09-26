import React from "react";
import {deleteTodoList} from "../clients/TodoTaskClient";

function TodoComponent({todolist, resetTodoList}) {

    const handleDeleteClick = () => {
        deleteTodoList(`http://localhost:8080/lists/${todolist.id}`).then(
            setTimeout(resetTodoList, 100)

        )
    }


    return (
        <div className={"todo_element"}>
            <p>{todolist.name}</p>
            <button onClick={handleDeleteClick}>Slett</button>
        </div>
    )

}

export default TodoComponent
