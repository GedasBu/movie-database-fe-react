import { ChangeEvent } from 'react';
import { InputHTMLAttributes } from 'react';

import styles from './TextInputField.module.css';

export type TextInputStatelessProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  name: string;
  onChange?: (e: ChangeEvent) => void;
  placeholder: string;
  value?: string;
  error?: string;
  label?: string;
};
const TextInputFieldStateless = ({ error, onChange, value, onBlur, name, label, type, ...rest }: TextInputStatelessProps): JSX.Element => {
  return (
    <div className={styles.textInputField}>
      {label && <label>{label}</label>}
      <input {...rest} className={styles.input} type={type} value={value} onBlur={onBlur} onChange={onChange} />
      {error && <span className={styles.fieldError}>{error}</span>}
    </div>
  );
};

export default TextInputFieldStateless;
