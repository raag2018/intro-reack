//import logo from './logo.svg';
import React from 'react';
import { AppUI } from './AppUI';
import './App.css';
const defaultTodos = [
	{text: "Comida 1", complete: false},
	{text: "Comida 2", complete: true},
	{text: "Comida 3", complete: false},
	{text: "Comida 4", complete: false},
  ];
  const useLocalStore = (itemName, initialValue) =>{
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    if(!localStorageItem){
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedItem = initialValue;
    }else{
      parsedItem = JSON.parse(localStorageItem);
    }
    const [item, setTodos] = React.useState(parsedItem);
    const saveItem = (newItem) =>{
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setTodos(newItem);
    }
    return [
      item, saveItem
    ]
  }


function App() {
  const [todos, saveTodos] = useLocalStore('TODOS_V1',[]);
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
    saveTodos(newTodos);
    /*todos[todoIndex] = {
      text: todos[todoIndex].text,
      complete: true
    }*/
  }
  const deleteTodo  = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }
  return (
    <AppUI 
      totalTodos={totalTodos} 
      completeTodos={completeTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchTodo = {searchTodo}
      completedTodo = {completedTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
