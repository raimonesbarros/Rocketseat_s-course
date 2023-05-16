import { EmptyTask } from './EmptyTask.tsx';
import { Task } from './Task.tsx';
import styles from './Tasks.module.css';

export function Tasks() {
  return(
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <p>Tarefas criadas <span>0</span></p>
        </div>
        <div className={styles.done}>
          <p>Concluidas
              {/* <span>0</span> */}
              <span>2 de 5</span> 
          </p>
        </div>
      </div>
      <div className={styles.tasksList}>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );

};
