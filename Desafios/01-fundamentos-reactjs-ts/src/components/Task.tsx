import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';

export function Task(){
  return(
    <div className={styles.task}>
      <input type="checkbox" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <Trash className={styles.trash} />
    </div>
  );

};
