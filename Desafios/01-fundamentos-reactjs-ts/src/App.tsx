import { Tasks } from './components/Tasks.tsx';

import styles from './App.module.css';

export function App() {

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src="./src/assets/rocket.svg" />
        <h1>to<span>do</span></h1>
      </header>
      <main>
        <div className={styles.task}>
          <input
            type="text"
            placeholder='Adicione uma nova tarefa'
            required
          />
          <button type='submit'>Criar
            <img src="./src/assets/plus.svg"/>
          </button>
        </div>
        <Tasks />
      </main>

    </div>
  );
};
