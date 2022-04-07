import { useEffect, useState } from 'react';
import { FieldProps } from 'formik';

import SelectFieldStateless, { SelectInputProps, Option } from './SelectFIeldStateless ';

const SelectFieldAdapter = ({ id, field, isClearable = false, form, options, placeholder, ...rest }: SelectInputProps & FieldProps): JSX.Element => {
  const [fieldSelectValue, setFieldSelectValue] = useState<Option | Option[] | undefined>(undefined);
  const { name, value } = field;
  const { setFieldValue } = form;

  useEffect(() => {
    const valueToSet = options.filter((option) => value.includes(option?.value));
    setFieldSelectValue(valueToSet);
  }, [value]);

  const handleChange = (selectValue: string | string[]) => {
    setFieldValue(name, selectValue);
  };

  return (
    <div>
      <SelectFieldStateless
        {...rest}
        id={id}
        isClearable={isClearable}
        name={name}
        options={options}
        placeholder={placeholder}
        value={fieldSelectValue}
        onChange={handleChange}
      />
    </div>
  );
};
export default SelectFieldAdapter;
