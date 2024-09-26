import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import NewTodoList from "./components/NewTodoList";

function App() {
  return (
    <div className="bg-primary text-accent">
     It's live
        <TodoList></TodoList>
    </div>
  );
}

export default App;
