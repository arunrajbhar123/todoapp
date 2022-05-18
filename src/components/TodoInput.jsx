import React,{useState} from 'react';
import styles from './styles/styles.module.css';

const TodoInput = ({textGet}) => {
const [value, setValue] = useState('');

  return (
    <div className={styles.input}>
      <input value={value} placeholder='Write...'
        onChange={(e)=> setValue(e.target.value)}
      />
      <button onClick={()=>{

        textGet(value)
        setValue("")
      }}>Add</button>
    </div>
  )
}

export default TodoInput;