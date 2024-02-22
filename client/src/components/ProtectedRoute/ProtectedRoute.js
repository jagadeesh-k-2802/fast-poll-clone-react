import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/auth';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const isAuthenticated = useSelector(selectCurrentUser);

  return isAuthenticated ? (
    <Route {...props} render={routeProps => <Component {...routeProps} />} />
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRoute;
