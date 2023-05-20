import { useState } from "react";
import { Task } from "../Task/Task.tsx";
import { EmptyTask } from "../EmptyTask/EmptyTask.tsx";
import { TaskType } from "../../App.tsx";

import styles from "./TaskList.module.css";


interface TaskListProps {
  tasks: TaskType[]
  onSetTasks: (value: TaskType[]) => void
}

export function TaskList({ tasks, onSetTasks }: TaskListProps) {
  const [checkedQtty, setCheckedQtty] = useState(0)

  function renderTask() {
    if (tasks.length === 0) return <EmptyTask />;
    else
      return tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          content={task.content}
          onDeleteTask={deleteTask}
          onUpdateStatus={updateStatus}
        />
      ));
  }

  function updateStatus(value: number){
    setCheckedQtty(value)
  }

  function renderStatus() {

    if (tasks.length === 0) return <span>0</span>;
    else
      return (
        <span>
          {checkedQtty} de {tasks.length}
        </span>
      );
  }


  function deleteTask(value: string | null | undefined) {
    const tasksWithoutTaskToDelete = tasks.filter((task) => task.id != value);
    onSetTasks(tasksWithoutTaskToDelete);
  }

  return(
    <div className={styles.tasks}>
    <div className={styles.info}>
      <div className={styles.created}>
        <p>
          Tarefas criadas <span>{tasks.length}</span>
        </p>
      </div>
      <div className={styles.done}>
        <p>
          Concluidas
          {renderStatus()}
        </p>
      </div>
    </div>
    <div className={styles.tasksList}>{renderTask()}</div>
  </div>
  );
}
