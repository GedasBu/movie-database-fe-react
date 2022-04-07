import { Field } from 'formik';

import TextInputFieldAdapter from './TextInputFieldAdapter';
import { TextInputStatelessProps } from './TextInputFieldStateless';

const TextImputField = (props: TextInputStatelessProps): JSX.Element => {
  return <Field component={TextInputFieldAdapter} {...props} />;
};

export default TextImputField;
