import React, { useState } from "react";
import { postTodoListFetch } from "../clients/TodoTaskClient";

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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter list name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">Add List</button>
      </form>
    </>
  );
};

export default NewTodoListComponent;
