import styles from './NewTask.module.css';

export function NewTask(){
  return(
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
  );
};
