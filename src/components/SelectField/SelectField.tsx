import { Field } from 'formik';

import SelectFieldAdapter from './SelectFieldAdapter';
import { SelectInputProps } from './SelectFIeldStateless ';

const SelectInputField = (props: SelectInputProps): JSX.Element => {
  return <Field {...props} component={SelectFieldAdapter} />;
};
export default SelectInputField;
