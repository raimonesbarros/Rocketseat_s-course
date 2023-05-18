import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';

interface TaskProps {
  id?: string
  content: string
  onDeleteTask: (value: string | null | undefined) => void
}

export function Task({ id, content, onDeleteTask }: TaskProps){
  
  function handleDeleteTask(event: any){
    
    const id = event.target.parentNode?.firstChild.textContent;
    onDeleteTask(id)
  }
  
  return(
    <div className={styles.task}>
      <span>{id}</span>
      <input type="checkbox" />
      <p>{content}</p>
      <Trash
        className={styles.trash}
        onClick={handleDeleteTask}  
      />
    </div>
  );

};
