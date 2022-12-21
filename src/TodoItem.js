import React from 'react';
import "./css/TodoItem.css";

function TodoItem({text, completed}){
	const onComplete = (todoComplete) => {
		alert('Ya completaste el TODO ' + todoComplete);
	}
	const onDelete = (todoDelete) => {
		alert('Borraste el TODO ' + todoDelete);
	}
	return (
		<React.Fragment>
		{
            //todos.map(todo => (
			  	<li className='todoItem alert alert-info'>
					
					<span  
					 className={` Icon Icon-check ${completed && 'Icon-check--active'}`}
					 onClick={() => onComplete(text)}
					 >
						
						<i className="fa-solid fa-circle-check"></i>
					</span>
					<p className={`todoItem-p ${completed && 'todoItem-p--complete'}`}>
						{text}
					</p>
					{/*<button type="button" className="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>*/}
					<span className='Icon Icon-delete'
						onClick={() => onDelete(text)}
					> X</span>
				</li>
			//))
        }
		 </React.Fragment>
	);
}
export {TodoItem};
