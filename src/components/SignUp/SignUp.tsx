import { Formik, Form } from 'formik';
import { useMutation } from 'react-query';
import TextInputField from 'components/TextInputField/TextInputField';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useProfile } from 'providers/ProfileProvider';

import { signUp, sigIn } from '../../api/authorization/authorization';
import Button from '../../components/Button/Button';
import styles from './SignUp.module.css';
import { SignInData, SignUpdata } from '../../api/authorization/types';

type SignUpProps = {
  onFormSubmit: () => void;
  onFormCancel?: () => void;
  showModal: boolean;
};

const SignUpForm = ({ onFormCancel, onFormSubmit, showModal }: SignUpProps): JSX.Element => {
  const [signUpOpen, setsignUpOpen] = useState(false);
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const { logIn } = useProfile();

  const { mutate: userSignUp } = useMutation(signUp);
  const { mutate: signIn, data: signInData } = useMutation((credentials: SignInData) => sigIn(credentials));

  useEffect(() => {
    if (signInData && signInData.token) {
      logIn(signInData.token);
      onFormSubmit();
    }
  }, [signInData]);

  const SignupSchema = (signUpOpen: boolean) => {
    return Yup.object().shape({
      ...(signUpOpen && { name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required') }),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(8, 'Too Short!').required('Required'),
    });
  };

  const signUpHandler = () => {
    setsignUpOpen(!signUpOpen);
  };

  const onSubmit = (values: SignUpdata) => {
    if (signUpOpen) userSignUp(values);
    else {
      signIn(values);
    }
  };

  return (
    <div className={showModal ? styles.modal : styles.modalHide}>
      <Formik initialValues={initialValues} validationSchema={SignupSchema} onCancel={onFormCancel} onSubmit={onSubmit}>
        <Form className={styles.formContent}>
          <div className={styles.formHeader}>{signUpOpen ? <span>Please sign-up</span> : <span>Please login</span>}</div>
          <div>
            {signUpOpen && <TextInputField id="name" label="Full name" name="name" placeholder="Enter full name" type="text" />}
            <TextInputField id="email" label="User email" name="email" placeholder="Enter email" type="email" />
            <TextInputField id="password" label="Password" name="password" placeholder="Enter password" type="password" />

            <p>
              {signUpOpen ? 'Already a user?' : 'Not a user yet?'}
              <button className={styles.signInButton} type="button" onClick={signUpHandler}>
                {signUpOpen ? 'Sign-In' : 'Sign-up!'}
              </button>
            </p>
          </div>

          <div className={styles.buttonsContainer}>
            <Button text="Cancel" type="reset" onClick={onFormCancel} />
            <Button text="Login" type="submit" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
