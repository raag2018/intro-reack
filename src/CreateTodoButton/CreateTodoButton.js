import React from 'react';
import "./CreateTodoButton.css";
function CreateTodoButton(props){
	const onClickButton = () => {
		props.setOpenModal(prevstate => !prevstate);
	}
	return (
			<button 
				className='createTodoButton'
				onClick={onClickButton}
			>
				+
			</button>
		);
}
export {CreateTodoButton};