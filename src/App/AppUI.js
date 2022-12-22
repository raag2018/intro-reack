//import logo from './logo.svg';
import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
function AppUI({
      loading,
      error,
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
        {error && <p>Lo sentimos, ha habido un error.</p>}
        {loading && <p>Estamos cargando la información.</p>}
        {(!loading && !searchTodo.lenght === 0) && <p>Por favor crea tu primer TODO.</p>}
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
