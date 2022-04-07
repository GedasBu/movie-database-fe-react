import styles from './Loader.module.css';
const Loader = (): JSX.Element => {
  return (
    <div className={styles.spinner_backdrop}>
      <div className={styles.lds_ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
