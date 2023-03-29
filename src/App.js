import InputField from './components/InputField';
import TodoList from './components/TodoList';
import {useState, useRef} from 'react';

const App = () => {
  const [todo, setTodo] = useState({desc: '', id: 0});
  const [taskList, setTaskList] = useState([]);
  const [indicator, setIndicator] = useState('');
  const [currentID, setCurrentID] = useState(null);
  const input = useRef();
  const handleOnChange = event =>{
    const {name, value} = event.target;
    setTodo({[name]: value, id: todo.id + 1});
  }

  const focus = () =>{
    input.current.focus();
  }

  const handleAddTask = event =>{
    if(todo.desc === '') return;
    setTaskList([...taskList, todo]);
    setTodo({desc: '', id: 0});
    focus();
  }  
  
  const handleOnKeyDown = event =>{
    if(event.keyCode === 13){
      handleAddTask();
    }
  }
  
  const handleDelete = id =>{
    setTaskList(taskList.filter(tl => tl.id !== id));
    setTodo({desc: '', id: 0});
    setIndicator('delete');
    focus();
  }
  
  const handleEditTask = () =>{
    const index = taskList.findIndex(tl => tl.id === currentID);
    const currentTask = taskList[index];
    const temp = [...taskList];
    const description = todo.desc;
    temp[index] = {...currentTask, desc: description};
    setTaskList(temp);
    setIndicator(null);
    focus();
    setTodo({desc: '', id: 0});
  }
  
  const handleEditBtn = id =>{
    setTodo(taskList.find(tl => tl.id === id))
    setIndicator('edit');
    setCurrentID(id);
    focus();
  }

  return (
    <>
      <h1 className="title">TODO App</h1>
      <div className="App">
        <InputField 
          onChange={handleOnChange} 
          desc={todo.desc} 
          addTask={handleAddTask}
          editTask={handleEditTask}
          input={input}
          onKeyDown={handleOnKeyDown}
          indicator={indicator}
        />
        <div className="todo-lists">
          {
            taskList.map(list =>{
              return(
                <TodoList 
                  key={list.id} 
                  {...list} 
                  onDelete={handleDelete} 
                  onEdit={handleEditBtn}
                />
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
