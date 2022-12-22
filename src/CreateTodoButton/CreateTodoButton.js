import React from 'react';
import "./CreateTodoButton.css";
function CreateTodoButton(){
	const onClickButton = (msg) => {
		alert(msg);
	}
	return (
			<button 
				className='createTodoButton'
				onClick={() => onClickButton("Aqui se debe de abrir el modal")}
			>
				+
			</button>
		);
}
export {CreateTodoButton};