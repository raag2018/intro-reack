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
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if(!localStorageItem){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        }catch(err){
          setError(err);
        }
      }, 1000)
    });
 
  
    const saveItem = (newItem) =>{
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
        setLoading(false);
      }catch(err){
        setError(err);
      }
    }
    return {
      item, saveItem, loading, error
    }
  }


function App() {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStore('TODOS_V1',[]);
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
      loading={loading}
      error={error}
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
