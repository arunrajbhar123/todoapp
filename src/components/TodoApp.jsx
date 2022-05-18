import React,{useState} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles/styles.module.css';

const TodoApp = () => {
  const [text, setText] = useState([]);
  const textGet =(newText)=>{
    setText([...text,newText]);
  }
  const deleteTodo=(value)=>{
    setText(text.filter(el=> el !==value))
  }
  return (
    <div>
    <h1>Todo App</h1>
      <TodoInput textGet={textGet}/>
      <TodoList>
      {text.map((el)=>{
        return <div>
        {/* <li>{el}</li> */}
        <TodoItems key={uuidv4()} value={el} deleteTodo={deleteTodo}/>
        </div>
      })}
      </TodoList>

    </div>
  )
}

export default TodoApp;