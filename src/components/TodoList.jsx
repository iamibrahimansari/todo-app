import {FaTrashAlt, FaPen} from 'react-icons/fa';
const TodoList = ({desc, id, onDelete, onEdit}) =>{
    return(
        <div className="todo-list">
            <p className="todo">
                {desc}
            </p>
            <div className="btns">
                <button type="button" onClick={(event) => onEdit(id)}><FaPen /></button>
                <button type="button" onClick={() => onDelete(id)}><FaTrashAlt /></button>
            </div>
        </div>
    )
}

export default TodoList;