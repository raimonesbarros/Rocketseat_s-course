import styles from './Header.module.css';

export function Header(){
  return(
    <header className={styles.header}>
      <img src="./src/assets/rocket.svg" />
      <h1>to<span>do</span></h1>
    </header>
  );
};
