import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/auth';
import Footer from './Footer';

const FooterContainer = () => {
  const currentUser = useSelector(selectCurrentUser);
  return <Footer currentUser={currentUser} />;
};

export default FooterContainer;
