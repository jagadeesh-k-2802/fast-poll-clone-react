import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Home from '../../pages/Home/HomeContainer';
import Dashboard from '../../pages/Dashboard/DashboardContainer';
import PublicPolls from '../../pages/PublicPolls/PublicPollsContainer';
import MyPolls from '../../pages/MyPolls/MyPollsContainer';
import MyVotes from '../../pages/MyVotes/MyVotesContainer';
import Login from '../../pages/Login/LoginContainer';
import SignUp from '../../pages/SignUp/SignUpContainer';
import Terms from '../../pages/Terms/Terms';
import Contact from '../../pages/Contact/ContactContainer';
import Brand from '../../pages/Brand/Brand';
import Support from '../../pages/Support/Support';
import Privacy from '../../pages/Privacy/Privacy';
import About from '../../pages/About/About';
import Pro from '../../pages/Pro/ProContainer';
import Profile from '../../pages/Profile/ProfileContainer';
import CreatePoll from '../../pages/CreatePoll/CreatePollContainer';
import PasswordReset from '../../pages/PasswordReset/PasswordResetContainer';
import PollVote from '../../pages/PollVote/PollVoteContainer';
import PollResults from '../../pages/PollResults/PollResultsContainer';
import EditPoll from '../../pages/EditPoll/EditPollContainer';
import PasswordChange from '../../pages/PasswordChange/PasswordChangeContainer';
import DeleteAccount from '../../pages/DeleteAccount/DeleteAccountContainer';
import ChangeLog from '../../pages/ChangeLog/ChangeLog';
import Settings from '../../pages/Settings/SettingsContainer';
import NotFound from '../../pages/404/NotFound';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/login', component: Login },
  { path: '/sign-up', component: SignUp },
  { path: '/password-reset', component: PasswordReset },
  { path: '/password-reset/:token', component: PasswordReset },
  { path: '/terms', component: Terms },
  { path: '/privacy', component: Privacy },
  { path: '/brand', component: Brand },
  { path: '/support', component: Support },
  { path: '/public', component: PublicPolls },
  { path: '/dashboard', component: Dashboard, auth: true },
  { path: '/my-polls', component: MyPolls, auth: true },
  { path: '/my-votes', component: MyVotes, auth: true },
  { path: '/contact', component: Contact },
  { path: '/about', component: About },
  { path: '/new', component: CreatePoll },
  { path: '/pro', component: Pro },
  { path: '/changelog', component: ChangeLog },
  { path: '/settings', component: Settings, auth: true },
  { path: '/password-change', component: PasswordChange, auth: true },
  { path: '/delete-account/:token', component: DeleteAccount, auth: true },
  { path: '/user/:username', component: Profile },
  { path: '/poll/:id', component: PollVote },
  { path: '/poll/results/:id', component: PollResults },
  { path: '/poll/edit/:id', component: EditPoll, auth: true },
  { path: '*', component: NotFound }
];

const App = ({ isAuthStateLoading }) => {
  // Optionally show an loading screen for the application
  if (isAuthStateLoading) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ auth, ...props }) =>
          auth ? (
            <ProtectedRoute key={props.path} exact {...props} />
          ) : (
            <Route key={props.path} exact {...props} />
          )
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
