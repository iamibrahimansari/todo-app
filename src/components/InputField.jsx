import {FaPlus, FaCheck} from 'react-icons/fa';
const InputField = ({onChange, desc, addTask,editTask, input, onKeyDown, indicator}) =>{
    return(
        <div className="input-field">
            <input 
                type="text" 
                ref={input} 
                autoFocus 
                name='desc'
                value={desc} 
                placeholder="Type here...." 
                onChange={onChange}
                onKeyDown={onKeyDown} 
            />
            <button type="button" >
                {
                    indicator === 'edit' ?
                    <FaCheck className="add" onClick={editTask} /> :
                    <FaPlus className="add" onClick={addTask} />
                }
            </button>
        </div>
    )
}

export default InputField;