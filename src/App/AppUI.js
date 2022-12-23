//import logo from './logo.svg';
import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Modal } from "../Modal";
import { TodoForm } from '../TodoForm';
/*{
      loading,
      error,
      totalTodos,
      completeTodos,
      searchValue,
      setSearchValue,
      searchTodo, 
      completedTodo,
      deleteTodo, 
}
totalTodos={totalTodos} completeTodos={completeTodos}
 searchValue = {searchValue}
  setSearchValue = {setSearchValue}
*/
function AppUI() {
  const { error, loading, searchTodo, completedTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Lo sentimos, ha habido un error.</p>}
        {loading && <p>Estamos cargando la información.</p>}
        {(!loading && !searchTodo.lenght === 0) && <p>Por favor crea tu primer TODO.</p>}
        {
          searchTodo.map(todo => (
            <TodoItem
              text={todo.text}
              completed={todo.complete}
              onComplete={() => completedTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              key={todo.text} />
          ))
        }
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal}/>
      {
        !!openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )
      }

    </React.Fragment>
  );
}
export { AppUI };
