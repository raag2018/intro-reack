import React from 'react';
import { useLocalStore } from './useLocalStorage';
const TodoContext = React.createContext();
function TodoProvider(props){
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStore('TODOS_V1',[]);
    const [openModal, setOpenModal] = React.useState(false);
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
       
        const addTodo  = (text) => {
          const newTodos = [...todos];
          newTodos.push({
            complete: false,
            text: text,
          });
          saveTodos(newTodos);
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
    return(
        
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completeTodos,
            searchValue,
            setSearchValue,
            searchTodo, 
            addTodo,
            completedTodo,
            deleteTodo, 
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}
export {TodoContext, TodoProvider};