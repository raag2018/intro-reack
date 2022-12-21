import React from 'react';
import "./css/TodoSearch.css";
function TodoSearch({searchValue, setSearchValue}){
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