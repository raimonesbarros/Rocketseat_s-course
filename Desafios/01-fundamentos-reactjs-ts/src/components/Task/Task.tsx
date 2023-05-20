import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";
import { ChangeEvent } from "react";

interface TaskProps {
  id?: string;
  content: string;
  onDeleteTask: (value: string | null | undefined) => void;
  onUpdateStatus: (value: number ) => void
}

export function Task({ id, content, onDeleteTask, onUpdateStatus }: TaskProps) {

  function handleDeleteTask(event: any) {
    const id = event.target.parentNode?.firstChild.textContent;
    onDeleteTask(id);
  }

  function getStatus(event: ChangeEvent){
    const allTasks = event.target.parentNode?.parentNode?.childNodes;
    let checkedQtty = 0;
    allTasks?.forEach(task => {
      if(task.children[1].checked){
        checkedQtty += 1;
      }
    })
    onUpdateStatus(checkedQtty)
  }

  return (
    <div className={styles.task}>
      <span>{id}</span>
      <input type="checkbox" onChange={getStatus} />
      <p>{content}</p>
      <Trash className={styles.trash} onClick={handleDeleteTask} />
    </div>
  );
}
