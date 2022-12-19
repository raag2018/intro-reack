import React from 'react';
import "./css/TodoItem.css";
const todos = [
	{text: "Comida 1", complete: false},
	{text: "Comida 2", complete: true},
	{text: "Comida 3", complete: false},
	{text: "Comida 4", complete: false},
  ];
function TodoItem(){
	return (
		<React.Fragment>
		{
            todos.map(todo => (
			  	<li key = {todo.key} className='todoItem'>
					<span className={`Icon Icon-check ${todo.complete && 'Icon-check--active'}`}>
						C 
					</span>
					<p className={`todoItem ${todo.complete && 'todoItem-p--complete'}`}>
						{todo.text}
					</p>
					
					<span className='Icon Icon-delete'> X</span>
				</li>
			))
        }
		 </React.Fragment>
	);
}
export {TodoItem};
