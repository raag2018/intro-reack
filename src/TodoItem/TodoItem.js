import React from 'react';
import "./TodoItem.css";

function TodoItem({text, completed, onComplete, onDelete}){
	return (
		<React.Fragment>
		{
            //todos.map(todo => (
			  	<li className='todoItem alert alert-info'>
					
					<span  
					 className={` Icon Icon-check ${completed && 'Icon-check--active'}`}
					 onClick={onComplete}
					 >
						
						<i className="fa-solid fa-circle-check"></i>
					</span>
					<p className={`todoItem-p ${completed && 'todoItem-p--complete'}`}>
						{text}
					</p>
					{/*<button type="button" className="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>*/}
					<span className='Icon Icon-delete'
						onClick={onDelete}
					> X</span>
				</li>
			//))
        }
		 </React.Fragment>
	);
}
export {TodoItem};
