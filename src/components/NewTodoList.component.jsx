import React, { useState } from "react";
import { postTodoListFetch } from "../clients/TodoTaskClient";
import CompletedButtons from "./CompletedButtons";
import InputField from "./InputField";

const NewTodoListComponent = ({ resetTodoList }) => {
  const [taskName, setTaskName] = useState("");


  const fetchTodo = async () => {
    try {
      await postTodoListFetch({ name: taskName });
      setTaskName("");

      if (resetTodoList) resetTodoList();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchTodo();
  };

  return (
    <section className=" w-full text-left py-2 m-auto flex justify-center flex-col mb-6  border-b border-gray-500  ">
      <form className="" onSubmit={handleSubmit}>
        <InputField
        type={"text"}
        value={taskName}
        required={true}
        placeholder="New Todo"
        onChange={(e) => setTaskName(e.target.value)}
        className="text-sm font-light w-[270px] p-1 rounded text-accent mr-5 focus:outline-none   focus:border-y-4 focus:border-accent" 
        />
        <InputField
        type={"text"}
        value={taskName}
        required={true}
        placeholder="Description"
        onChange={(e) => setTaskName(e.target.value)}
        className="text-sm font-light w-[270px] p-1 rounded text-accent mr-5 focus:outline-none   focus:border-y-4 focus:border-accent" 

        />
        
        <button className=" px-3 bg-accent font-light border-none  hover:text-primary rounded-sm m-6 text-white text-sm border border-accent" type="submit">Add List</button>
      </form>
      <CompletedButtons />
    </section>
  );
};

export default NewTodoListComponent;
