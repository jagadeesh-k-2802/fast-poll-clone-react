import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthStateLoading, setCurrentUser } from '../../redux/auth';
import api from '../../services/api';
import App from './App';

const AppContainer = () => {
  const isAuthStateLoading = useSelector(selectAuthStateLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    // Get current user
    (async () => {
      try {
        const res = await api.getCurrentUser();
        dispatch(setCurrentUser(res.data.user));
      } catch (err) {
        dispatch(setCurrentUser(null));
      }
    })();
  }, [dispatch]);

  return <App isAuthStateLoading={isAuthStateLoading} />;
};

export default AppContainer;
