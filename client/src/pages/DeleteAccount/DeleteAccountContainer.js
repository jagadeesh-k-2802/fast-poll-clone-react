import { useParams } from 'react-router';
import DeleteAccount from './DeleteAccount';
import api from '../../services/api';
import toastStack from '../../components/Toast/ToastStack';
import TOAST_TYPES from '../../components/Toast/ToastEnums';

const DeleteAccountPageContainer = () => {
  const { token } = useParams();

  const onDelete = async () => {
    try {
      await api.deleteAccountPermanently(token);
      setTimeout(() => (window.location = '/login'), 200);
    } catch (err) {
      toastStack.push({
        message: err?.response?.data?.error ?? err.message,
        type: TOAST_TYPES.ERROR
      });
    }
  };

  return <DeleteAccount onDelete={onDelete} />;
};

export default DeleteAccountPageContainer;
