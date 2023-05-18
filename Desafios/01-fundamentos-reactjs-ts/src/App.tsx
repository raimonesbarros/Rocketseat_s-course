import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./components/Task.tsx";
import { EmptyTask } from "./components/EmptyTask.tsx";

import styles from "./App.module.css";

interface TaskType {
  id: string;
  checked: boolean;
  content: string;
}

let checkedQtty = 0;

export function App() {
  const [writeNewTask, setWriteNewTask] = useState("");
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function handleWriteTask(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setWriteNewTask(value);
  }

  function renderStatus() {
    let qtty = 0;
    tasks.map((task) => (task.checked == true ? (qtty += 1) : ""));
    checkedQtty = qtty;
    if (tasks.length === 0) return <span>0</span>;
    else
      return (
        <span>
          {checkedQtty} de {tasks.length}
        </span>
      );
  }

  function handleAddNewTask() {
    const id = uuidv4();
    const newTask = {
      id: id,
      checked: false,
      content: writeNewTask,
    };

    setTasks((preState) => [...preState, newTask]);
    setWriteNewTask("");
  }

  function deleteTask(value: string | null | undefined) {
    console.log(value);
    const tasksWithoutTaskToDelete = tasks.filter((task) => task.id != value);
    console.log(tasksWithoutTaskToDelete);
    setTasks(tasksWithoutTaskToDelete);
  }

  const isValidTask = writeNewTask.length < 1;

  function renderTask() {
    if (tasks.length === 0) return <EmptyTask />;
    else
      return tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          content={task.content}
          onDeleteTask={deleteTask}
        />
      ));
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src="./src/assets/rocket.svg" />
        <h1>
          to<span>do</span>
        </h1>
      </header>
      <main>
        <div className={styles.task}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleWriteTask}
            value={writeNewTask}
            required
          />
          <button
            type="submit"
            onClick={handleAddNewTask}
            disabled={isValidTask}
          >
            Criar
            <img src="./src/assets/plus.svg" />
          </button>
        </div>
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
      </main>
    </div>
  );
}
