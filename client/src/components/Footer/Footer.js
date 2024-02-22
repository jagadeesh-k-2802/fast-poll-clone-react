import { Link } from 'react-router-dom';
import { StyledFooter, SocialIcons, Subtitle, Right } from './Footer.styled';
import { Left, FooterColumn } from './Footer.styled';
import { StyledLink } from './Footer.styled';
import Container from '../Container/Container.styled';
import fastPollIcon from '../../assets/fast-poll-icon.svg';
import facebookIcon from '../../assets/icon-facebook-footer.svg';
import twitterIcon from '../../assets/icon-twitter-footer.svg';
import Flex from '../Flex/Flex.styled';

const Footer = ({ currentUser }) => {
  return (
    <StyledFooter>
      <Container>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          className="footer-wrapper"
        >
          <Left>
            <Link to="/">
              <img src={fastPollIcon} alt="fast-poll-icon" />
            </Link>

            <SocialIcons>
              <a
                href="https://www.facebook.com/Fastpolls/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={facebookIcon} alt="facebook-logo" />
              </a>

              <a
                href="https://twitter.com/fastpoll_"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={twitterIcon} alt="twitter-logo" />
              </a>
            </SocialIcons>

            <p>&copy; {new Date().getFullYear()}</p>
          </Left>

          <Right>
            <FooterColumn>
              <Subtitle>General</Subtitle>
              <StyledLink to="/public">Public Polls</StyledLink>
              <StyledLink to="/about">About Us</StyledLink>
              <StyledLink to="/support">Support</StyledLink>
              <StyledLink to="/contact">Get In Touch</StyledLink>
              <StyledLink to="/brand">Brand</StyledLink>
              <StyledLink to="/changelog">What's New</StyledLink>
            </FooterColumn>

            <FooterColumn>
              <Subtitle>Account</Subtitle>
              <StyledLink to="/pro">Go Pro</StyledLink>
              <StyledLink to="/pro">Ad Free Pro</StyledLink>
              {currentUser ? (
                <>
                  <StyledLink to="/dashboard">Dashboard</StyledLink>
                  <StyledLink to="/my-polls">My Polls</StyledLink>
                  <StyledLink to="/my-votes">My Votes</StyledLink>
                  <StyledLink to="/settings">Settings</StyledLink>
                </>
              ) : (
                <>
                  <StyledLink to="/sign-up">Sign Up</StyledLink>
                  <StyledLink to="/login">Login</StyledLink>
                  <StyledLink to="/password-reset">Password Reset</StyledLink>
                </>
              )}
            </FooterColumn>

            <FooterColumn>
              <Subtitle>Privacy</Subtitle>
              <StyledLink to="/terms">Terms Of Use</StyledLink>
              <StyledLink to="/privacy">Privacy Policy</StyledLink>
            </FooterColumn>
          </Right>
        </Flex>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
