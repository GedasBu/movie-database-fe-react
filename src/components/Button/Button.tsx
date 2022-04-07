type ButtonProps = {
  text: string;
  type: 'submit' | 'reset' | 'button' | 'reset';
  onClick?: () => void;
};
import styles from './Button.module.css';

const Button = ({ text, type, onClick }: ButtonProps): JSX.Element => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
