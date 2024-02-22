import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/auth';
import Home from './Home';

const HomeContainer = () => {
  const currentUser = useSelector(selectCurrentUser);
  return <Home currentUser={currentUser} />;
};

export default HomeContainer;
