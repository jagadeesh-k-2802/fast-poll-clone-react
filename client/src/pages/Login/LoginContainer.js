import { useState } from 'react';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { setCurrentUser, selectCurrentUser } from '../../redux/auth';
import toastStack from '../../components/Toast/ToastStack';
import TOAST_TYPES from '../../components/Toast/ToastEnums';
import LoginPage from './Login';

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    const data = { email, password };

    try {
      const res = await api.login(data);
      dispatch(setCurrentUser(res.data.user));
    } catch (err) {
      toastStack.push({
        message: err?.response?.data?.error ?? err.message,
        type: TOAST_TYPES.ERROR
      });
    }
  };

  return (
    <LoginPage
      email={email}
      password={password}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginContainer;
