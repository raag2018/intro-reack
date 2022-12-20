import React from 'react';
import "./css/TodoItem.css";
const todos = [
	{text: "Comida 1", complete: false},
	{text: "Comida 2", complete: true},
	{text: "Comida 3", complete: false},
	{text: "Comida 4", complete: false},
  ];
function TodoItem(){
	const onComplete = (todoComplete) => {
		alert('Ya completaste el TODO ' + todoComplete);
	}
	const onDelete = (todoDelete) => {
		alert('Borraste el TODO ' + todoDelete);
	}
	return (
		<React.Fragment>
		{
            todos.map(todo => (
			  	<li key = {todo.text} className='todoItem alert alert-info'>
					
					<span  
					 className={` Icon Icon-check ${todo.complete && 'Icon-check--active'}`}
					 onClick={() => onComplete(todo.text)}
					 >
						
						<i className="fa-solid fa-circle-check"></i>
					</span>
					<p className={`todoItem-p ${todo.complete && 'todoItem-p--complete'}`}>
						{todo.text}
					</p>
					{/*<button type="button" className="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>*/}
					<span className='Icon Icon-delete'
						onClick={() => onDelete(todo.text)}
					> X</span>
				</li>
			))
        }
		 </React.Fragment>
	);
}
export {TodoItem};
