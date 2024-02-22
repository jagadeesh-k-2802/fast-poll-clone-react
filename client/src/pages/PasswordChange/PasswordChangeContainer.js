import { useState } from 'react';
import PasswordChange from './PasswordChange';
import api from '../../services/api';
import toastStack from '../../components/Toast/ToastStack';
import TOAST_TYPES from '../../components/Toast/ToastEnums';

const PasswordChangeContainer = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'currentPassword':
        setCurrentPassword(value);
        break;
      case 'newPassword':
        setNewPassword(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    const data = { currentPassword, newPassword };

    try {
      await api.updateUserPassword(data);

      toastStack.push({
        message: 'Password Changed',
        type: TOAST_TYPES.SUCCESS
      });
    } catch (err) {
      toastStack.push({
        message: err?.response?.data?.error ?? err.message,
        type: TOAST_TYPES.ERROR
      });
    }
  };

  return (
    <PasswordChange
      currentPassword={currentPassword}
      newPassword={newPassword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default PasswordChangeContainer;
