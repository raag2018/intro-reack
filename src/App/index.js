//import logo from './logo.svg';
import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import './App.css';
/*const defaultTodos = [
	{text: "Comida 1", complete: false},
	{text: "Comida 2", complete: true},
	{text: "Comida 3", complete: false},
	{text: "Comida 4", complete: false},
  ];

 loading={loading}
      error={error}
      totalTodos={totalTodos} 
      completeTodos={completeTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchTodo = {searchTodo}
      completedTodo = {completedTodo}
      deleteTodo = {deleteTodo}*/

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  );
}

export default App;
