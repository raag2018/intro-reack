import React from 'react';
import "./css/TodoCounter.css";
function TodoCounter({totalTodos, completeTodos}){
	return (
			<h2 className='todoCounter'>Has completado {completeTodos} de {totalTodos} TODOs</h2>
		);
}
export {TodoCounter};