import { useState } from 'react';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { setCurrentUser, selectCurrentUser } from '../../redux/auth';
import toastStack from '../../components/Toast/ToastStack';
import TOAST_TYPES from '../../components/Toast/ToastEnums';
import SignUpPage from './SignUp';

const SignUpContainer = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'terms':
        setTermsAgreed(value => !value);
        break;
      default:
        break;
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    try {
      if (!termsAgreed) {
        throw new Error('Agree to terms');
      }

      const data = { firstName, lastName, username, email, password };
      const res = await api.signup(data);
      dispatch(setCurrentUser(res.data.user));
    } catch (err) {
      toastStack.push({
        message: err?.response?.data?.error ?? err.message,
        type: TOAST_TYPES.ERROR
      });
    }
  };

  return (
    <SignUpPage
      firstName={firstName}
      lastName={lastName}
      email={email}
      username={username}
      password={password}
      termsAgreed={termsAgreed}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default SignUpContainer;
