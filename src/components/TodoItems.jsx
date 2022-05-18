import React from 'react';
import styles from './styles/styles.module.css';

const TodoItems = ({value,deleteTodo}) => {
  console.log(value)
  return (
    <div className={styles.colortake}>
      <li className={styles.flex}>{value}
      <button className={styles.delete}onClick={()=>deleteTodo(value)}>Delete</button>
    </li>
    </div>
  )
}

export default TodoItems;