//import logo from './logo.svg';
import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
function AppUI({
      totalTodos,
      completeTodos,
      searchValue,
      setSearchValue,
      searchTodo, 
      completedTodo,
      deleteTodo, 
}) {
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

export {AppUI};
