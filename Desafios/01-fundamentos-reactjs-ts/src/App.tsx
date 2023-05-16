import { Header } from './components/Header.tsx';
import { NewTask } from './components/NewTask.tsx';
import { Tasks } from './components/Tasks.tsx';

import styles from './App.module.css';

export function App() {

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <NewTask />
        <Tasks />
      </main>

    </div>
  );
};
