import { FieldProps } from 'formik';

import TextInputFieldStateless, { TextInputStatelessProps } from './TextInputFieldStateless';

const TextInputFieldAdapter = ({ field, form, ...rest }: FieldProps & TextInputStatelessProps): JSX.Element => {
  const touched = form.touched?.[field.name] as undefined | boolean;
  const fieldError = form.errors?.[field.name] as undefined | string;

  const error = touched && fieldError ? fieldError : undefined;
  return <TextInputFieldStateless error={error} value={field.value} onBlur={field.onBlur} onChange={field.onChange} {...rest} />;
};

export default TextInputFieldAdapter;
