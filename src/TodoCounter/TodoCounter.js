import React from 'react';
import "./TodoCounter.css";
import { TodoContext } from '../TodoContext';
function TodoCounter(){
	const {totalTodos, completeTodos} = React.useContext(TodoContext);
	return (
			<h2 className='todoCounter'>Has completado {completeTodos} de {totalTodos} TODOs</h2>
		);
}
export {TodoCounter};