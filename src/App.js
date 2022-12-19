//import logo from './logo.svg';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      
       <TodoSearch/>
     
       <TodoList>
        <TodoItem/>
       </TodoList>
       <CreateTodoButton/>
     
    </React.Fragment>
  );
}

export default App;
