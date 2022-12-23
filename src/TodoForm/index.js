import React from "react";
import { TodoContext } from "../TodoContext";
function TodoForm() {
    const { addTodo, setOpenModal } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onChange = (event) => {
        let data = event.target.value;
        setNewTodoValue(data);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValue !== ''){
            addTodo(newTodoValue);
            setOpenModal(false);
        }else{
            alert("Debe agregar la tarea");
        }
    }

    return (

        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-primary">Agregar TODOs</h5>
                </div>
                <div className="modal-body"></div>
                <form className="" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label text-primary">Crear nuevo TODO</label>
                        <textarea placeholder="Agregar una tarea al TODO"
                            className="form-control"
                            value={newTodoValue}
                            onChange={onChange}>

                        </textarea>
                    </div>
                    <div className="form-group modal-footer">
                        <button className="btn btn-secondary"
                            type="button"
                            onClick={onCancel}
                        >
                            Cancelar
                        </button>
                        <button className="btn btn-primary"
                            type="submit"
                        >
                            Agregar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export { TodoForm };