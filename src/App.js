import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import AddTodoList from "./components/AddTodoList";

function App() {
  return (
    <div className="bg-primary text-accent">
     It's live
        <TodoList></TodoList>
        <AddTodoList></AddTodoList>
    </div>
  );
}

export default App;
