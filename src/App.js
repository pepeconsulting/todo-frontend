import logo from './logo.svg';
import './App.css';
import TodoListComponent from "./components/TodoList.component";
import NewTodoListComponent from "./components/NewTodoList.component";

function App() {
  return (
    <div className="bg-primary text-accent">
     It's live
        <TodoListComponent></TodoListComponent>
    </div>
  );
}

export default App;
