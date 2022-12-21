//import logo from './logo.svg';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
const defaultTodos = [
	{text: "Comida 1", complete: false},
	{text: "Comida 2", complete: true},
	{text: "Comida 3", complete: false},
	{text: "Comida 4", complete: false},
  ];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completeTodos = todos.filter(todo => !!todo.complete).length;
  const totalTodos = todos.length;
  let searchTodo = [];
  if(!searchValue >= 1){
    searchTodo = todos;
  }else{
    searchTodo = todos.filter(todo => {
      const searchText = searchValue.toLowerCase();
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchText);
    } );
  }
  const completedTodo  = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].complete = true;
    setTodos(newTodos);
    /*todos[todoIndex] = {
      text: todos[todoIndex].text,
      complete: true
    }*/
  }
  const deleteTodo  = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }
  return (
    <React.Fragment>
      <TodoCounter  totalTodos={totalTodos} completeTodos={completeTodos} />
      
       <TodoSearch
       searchValue = {searchValue}
       setSearchValue = {setSearchValue}
       />
     
       <TodoList>
       {
            searchTodo.map(todo => (
              <TodoItem 
               
                text={todo.text} 
                completed={todo.complete} 
                onComplete = {() => completedTodo(todo.text)}
                onDelete = {() => deleteTodo(todo.text)}
                key={todo.text}/>
			      ))
        }
        
       </TodoList>
       <CreateTodoButton/>
     
    </React.Fragment>
  );
}

export default App;
