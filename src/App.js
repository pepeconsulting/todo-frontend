import './App.css';
import TodoListComponent from "./components/TodoList.component";
import NewTodoListComponent from "./components/NewTodoList.component";

function App() {
  return (
    <div className= "w-fit p-4 mx-auto bg-primary mt-11 max-h-[80vh] overflow-y-auto shadow-lg">

        <TodoListComponent/>
    </div>
  );
}

export default App;
