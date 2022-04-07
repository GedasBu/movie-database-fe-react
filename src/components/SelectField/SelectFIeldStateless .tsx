// import { ChangeEvent } from 'react';
import Select, { Props, OnChangeValue, GroupBase } from 'react-select';

import styles from './SelectFieldStateless.module.css';
export type Option = { label: string; value: string };
export type OptionGroup = GroupBase<Option>;

export type SelectInputProps = Omit<Props<Option, boolean>, 'options' | 'onChange'> & {
  options: Option[];
  placeholder: string;
  id: string;
  isClearable?: boolean;
  name: string;
  isMulti?: boolean;
  onChange?: (value: string | string[]) => void;
};

const SelectFIeldStateless = ({ options, name, isClearable = false, isMulti = false, onChange, id, ...rest }: SelectInputProps): JSX.Element => {
  const handleChange = (value: OnChangeValue<Option, typeof isMulti>) => {
    if (isMulti && Array.isArray(value)) {
      onChange?.(value.map((option) => option.value));
    }

    if (!isMulti && value && 'value' in value) {
      onChange?.(value.value);
    }
  };

  return (
    <div>
      <Select
        className={styles.react_select_container}
        {...rest}
        id={id}
        isClearable={isClearable}
        isMulti={isMulti}
        name={name}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};
export default SelectFIeldStateless;
