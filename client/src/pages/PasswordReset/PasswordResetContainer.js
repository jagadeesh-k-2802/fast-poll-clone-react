import { useState } from 'react';
import { Redirect, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import api from '../../services/api';
import { selectCurrentUser } from '../../redux/auth';
import toastStack from '../../components/Toast/ToastStack';
import TOAST_TYPES from '../../components/Toast/ToastEnums';
import PasswordResetPage from './PasswordReset';

const PasswordResetContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordChanged, setPasswordChanged] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const { token } = useParams();

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
      case 'confirmPassword':
        setConfirmPassword(password);
        break;
      default:
        break;
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    try {
      if (!token) {
        const data = { email };
        await api.requestPasswordReset(data);

        toastStack.push({
          message: 'Password reset request sent to mail',
          type: TOAST_TYPES.SUCCESS
        });
      } else {
        if (password !== confirmPassword) {
          throw new Error('Password and confirm password does not match');
        }

        const data = { password };
        await api.resetPassword(data, token);
        setPasswordChanged(true);
      }
    } catch (err) {
      toastStack.push({
        message: err?.response?.data?.error ?? err.message,
        type: TOAST_TYPES.ERROR
      });
    }
  };

  return (
    <PasswordResetPage
      token={token}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      passwordChanged={passwordChanged}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default PasswordResetContainer;
