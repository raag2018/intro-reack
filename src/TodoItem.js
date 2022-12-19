import React from 'react';
const todos = [
	{text: "Comida 1", complete: false},
	{text: "Comida 2", complete: false},
	{text: "Comida 3", complete: false},
	{text: "Comida 4", complete: false},
  ];
function TodoItem(){
	return (
		<React.Fragment>
		{
            todos.map(todo => (
			  	<li key = {todo.key}>
					<span>C </span>
					{todo.text}
					<span> X</span>
				</li>
			))
        }
		 </React.Fragment>
	);
}
export {TodoItem};
