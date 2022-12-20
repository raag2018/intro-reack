import React from 'react';
import "./css/TodoSearch.css";
function TodoSearch(){
	const [searchValue, setSearchValue] = React.useState('');
	const onSearchValueChange = (event) =>{
		console.log(event.target.value);
		let data = event.target.value;
		/*() => onSearchValueChange('Prueba')*/
		setSearchValue(data);
	}
	return [
			<div>
			 <input 
			 placeholder='Comida'
			  className='todoSearch'
			  onChange={onSearchValueChange}
			  />
			  <p>{searchValue}</p>
			  </div>
			];
}
export {TodoSearch};