import React from "react";
import { deleteTodoList } from "../clients/TodoTaskClient";
import { AiOutlineDelete} from "react-icons/ai";
import {BsCheckLg} from 'react-icons/bs';


function TodoComponent({ todolist, resetTodoList }) {
  const handleDeleteClick = () => {
    console.log("Delete button clicked, todo ID:", todolist.id); 
    deleteTodoList(`${todolist.id}`).then(setTimeout(resetTodoList, 100));
  };

  return (
    <div className="w-full font-primary mb-3 bg-secondary shadow-md font-normal rounded-sm flex flex-row justify-between items-center gap-3 items-center px-5">
      <div className="flex flex-col mr-4 items-center">
        <h1 className="font-light text-md capitalize text-accent">{todolist.name}</h1>
        <h3 className="font-light text-sm">Description</h3>
      </div>
      <div className="flex flex-row justify-center items-center gap-3">
      <AiOutlineDelete  
        onClick={handleDeleteClick}
        className=" text-xl cursor-pointer text-gray-200   hover:text-[#d90429]"
      />
      <BsCheckLg className="text-xl cursor-pointer text-accent"/>
      </div>

  
    </div>
  );
}

export default TodoComponent;
