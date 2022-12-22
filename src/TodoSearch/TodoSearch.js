import React from 'react';
import "./TodoSearch.css";
import { TodoContext } from '../TodoContext';
function TodoSearch(){
	const {searchValue, setSearchValue} = React.useContext(TodoContext);
	const onSearchValueChange = (event) =>{
		let data = event.target.value;
		console.log(data);
		setSearchValue(data);
	}
	return (
			 <input 
			  placeholder='Comida'
			  className='todoSearch'
			  value={searchValue}
			  onChange={onSearchValueChange}
			  />
			)
			;
}
export {TodoSearch};