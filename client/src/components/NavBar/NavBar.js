import { Link } from 'react-router-dom';
import { StyledNavBar, StyledNavBarExtended } from './NavBar.styled';
import { Left, Mid, Right, RightMobile } from './NavBar.styled';
import { DropDownWrapper, DropDownHeader } from './NavBar.styled';
import { DropDownBody, DropDownFooter } from './NavBar.styled';
import { StyledLink, StyledExtendedLink } from './NavBar.styled';
import { FullScreenMenu, FullScreenWrapper } from './NavBar.styled';
import DropDown from '../DropDown/DropDown.styled';
import Divider from '../Divider/Divider.styled';
import StyledButton from '../Button/Button.styled';

const NavBar = ({
  currentUser,
  extended,
  onDropDownHide,
  dropDownVisible,
  modalVisible,
  toggleModal,
  showDropDown,
  pathname,
  onLogout
}) => {
  return (
    <>
      <StyledNavBar>
        <Left>
          <Link to="/"></Link>
        </Left>

        <Mid>
          <StyledLink to="/public">Public Polls</StyledLink>
          <StyledLink to="/pro">Go Pro</StyledLink>
          <StyledLink primary="true" to="/new" className="create-poll">
            Create Poll
          </StyledLink>

          <StyledButton
            $type="primary"
            as={Link}
            to="/new"
            className="new-btn-link"
          >
            Create Poll
          </StyledButton>
        </Mid>

        <Right>
          {!currentUser ? (
            <>
              <StyledLink to="/login">Login</StyledLink>
              <StyledButton $type="secondary" as={Link} to="/sign-up">
                Sign Up
              </StyledButton>
            </>
          ) : (
            <>
              {pathname === '/' && (
                <StyledLink to="/dashboard">Dashboard</StyledLink>
              )}

              <DropDownWrapper>
                <button onClick={showDropDown}>
                  <img src={`/avatar/${currentUser.avatar}`} alt="avatar" />
                </button>

                <DropDown
                  visible={dropDownVisible}
                  onHide={onDropDownHide}
                  top="57px"
                  right="-5px"
                >
                  <DropDownHeader>
                    <h3>{currentUser.fullName}</h3>
                    <p>{currentUser.email}</p>
                  </DropDownHeader>

                  <Divider />

                  <DropDownBody>
                    <Link to={`/user/${currentUser.username}`}>My Profile</Link>
                    <Link to="/settings">Settings</Link>
                    <Link to="/contact">Feedback</Link>
                  </DropDownBody>

                  <DropDownFooter>
                    <button onClick={onLogout}>Logout</button>
                  </DropDownFooter>
                </DropDown>
              </DropDownWrapper>
            </>
          )}
        </Right>

        <RightMobile>
          <button className="hamburger" onClick={toggleModal}>
            <span className={modalVisible ? 'active' : ''} />
          </button>

          <FullScreenMenu visible={modalVisible}>
            <FullScreenWrapper>
              {currentUser && (
                <Link to={`/user/${currentUser.username}`}>
                  <img src={`/avatar/${currentUser.avatar}`} alt="avatar" />
                </Link>
              )}

              {currentUser ? (
                <>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/public">Public Polls</Link>
                </>
              ) : (
                <>
                  <Link to="/pro">Go Pro</Link>
                  <Link to="/public">Public Polls</Link>
                </>
              )}

              <Divider height="2px" />

              {currentUser ? (
                <>
                  <Link to={`/user/${currentUser.username}`}>My Profile</Link>
                  <Link to="/pro">Pro Account</Link>
                  <Link to="/settings">Settings</Link>
                  <button onClick={onLogout}>Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/sign-up">Sign Up</Link>
                </>
              )}
            </FullScreenWrapper>
          </FullScreenMenu>
        </RightMobile>
      </StyledNavBar>

      {extended && currentUser && (
        <StyledNavBarExtended>
          <StyledExtendedLink to="/dashboard">Dashboard</StyledExtendedLink>
          <StyledExtendedLink to="/my-polls">My Polls</StyledExtendedLink>
          <StyledExtendedLink to="/my-votes">My Votes</StyledExtendedLink>
          <StyledExtendedLink to={`/user/${currentUser.username}`}>
            My Profile
          </StyledExtendedLink>
        </StyledNavBarExtended>
      )}
    </>
  );
};

export default NavBar;
