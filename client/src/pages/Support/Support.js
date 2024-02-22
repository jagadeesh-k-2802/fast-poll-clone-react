import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { NavHashLink } from 'react-router-hash-link';
import { SupportWrapper } from './components/SupportWrapper.styled';
import { SupportContent } from './components/SupportWrapper.styled';
import Main from './components/Main.styled';
import StickySideBar from '../../components/StickySideBar/StickySideBar.styled';
import Container from '../../components/Container/Container.styled';
import Divider from '../../components/Divider/Divider.styled';
import H1 from '../../components/Typography/H1.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import StyledButton from '../../components/Button/Button.styled';

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Support | Fast Poll</title>
      </Helmet>

      <NavBar />

      <Main>
        <Container>
          <H1>Support</H1>
          <p>
            Welcome to our support page, where we aim to answer any questions
            you may have.
          </p>

          <SupportWrapper>
            <StickySideBar>
              <NavHashLink
                to="#polls"
                activeClassName="active"
                isActive={(_, l) => l.hash === '' || l.hash === '#polls'}
                children="Polls"
              />

              <NavHashLink
                to="#poll-security"
                activeClassName="active"
                children="Poll Security"
              />

              <NavHashLink
                to="#user-accounts"
                activeClassName="active"
                children="User Accounts"
              />

              <NavHashLink
                to="#brand"
                activeClassName="active"
                children="Brand"
              />

              <NavHashLink
                to="#feedback"
                activeClassName="active"
                children="Feedback"
              />

              <NavHashLink
                to="#privacy"
                activeClassName="active"
                children="Privacy"
              />

              <NavHashLink
                to="#terms"
                activeClassName="active"
                children="Terms"
              />

              <NavHashLink
                to="#contact"
                activeClassName="active"
                children="Contact Us"
              />
            </StickySideBar>

            <SupportContent>
              <section id="polls">
                <h3>Polls</h3>
                <h2>General</h2>

                <p>
                  You can create two types of polls: private or public. Private
                  polls can be created by anyone using Fast Poll. If you wish to
                  create a public poll, you will need to create an account
                  first.
                </p>

                <p>
                  Anyone with access to a url for a poll will be able to vote,
                  regardless of whether the poll is private or public.
                </p>

                <p>
                  Polls can only be closed to voting if the creator was a
                  registered member when creating the poll. When closing a poll
                  to voting it will immediately stop any further votes being
                  cast. A notice will be shown to inform the user of this.
                </p>

                <p>
                  By default, polls are single vote only. This can be changed to
                  multiple votes when creating the poll. This option can only be
                  enabled when first creating a poll.
                </p>

                <p>
                  Comments can be enabled when creating a poll, however, they
                  can only be enabled or disabled at any time providing the poll
                  was created by a registered member.
                </p>

                <h2>Private polls</h2>
                <p>
                  Private polls will be hidden from your profile (providing you
                  have created a Fast Poll account) and public feed. It will
                  also not be indexed/discoverable via search engines and will
                  only be accessible via the url provided.
                </p>

                <h2>Public polls</h2>
                <p>
                  Public polls will be visible on your profile as well as in our
                  public poll feed, and will be indexed and discoverable via
                  search engines.
                </p>

                <h2>Sharing polls</h2>
                <p>
                  You will be provided with a url immediately after creating a
                  poll. All polls have a unique QR code that can be shared or
                  used at a public event or confrenece to allow larger groups of
                  people to access the poll easily.
                </p>
              </section>

              <Divider />

              <section id="poll-security">
                <h3>Poll Security</h3>
                <h2>Security options for our polls</h2>

                <p>
                  By default our polls are secured using cookies. This is to
                  allow the largest number of people possible to vote on polls
                  and not limit voting via IP addresses. Which can, in some
                  circumstances, limit access and voting.
                </p>

                <p>
                  We also offer a 'log in to vote' option on your polls. This
                  means that in order to vote on a poll a user must first create
                  a Fast Poll account. This is a more secure way of eliminating
                  duplicate votes being cast.
                </p>
              </section>

              <Divider />

              <section id="user-accounts">
                <h3>User Accounts</h3>
                <h2>Creating a Fast Poll account</h2>

                <p>Fast Poll accounts are completely free to create.</p>

                <p>
                  All users who create a Fast Poll account will have a public
                  profile where you can add an avatar, links to your social
                  media accounts and your personal bio. All of these details can
                  be updated via your <Link to="/settings">settings page.</Link>
                </p>

                <p>
                  If you would like to delete your Fast Poll account you can do
                  so via your <Link to="/settings">settings page.</Link>
                </p>

                <p>
                  If you need to change your password you can do this via your{' '}
                  <Link to="/settings">settings page.</Link> If you have
                  forgotten your password you can easily reset it using our{' '}
                  <Link to="/password-reset">password reset</Link> form.
                </p>
              </section>

              <Divider />

              <section id="brand">
                <h3>Brand</h3>
                <h2>Download our brand assets</h2>

                <p>
                  You can read about and download our brand assets via our{' '}
                  <Link to="/brand">brand page.</Link>
                </p>

                <StyledButton
                  $type="secondary"
                  as={Link}
                  to="/brand"
                  className="btn"
                  children="See our Brand Information"
                />
              </section>

              <Divider />

              <section id="feedback">
                <h3>Feedback</h3>
                <h2>We love to hear from our users</h2>

                <p>
                  In order for us to improve Fast Poll and create a better
                  service for everyone, we rely on valuable feedback from our
                  users. If you would like to share your feedback with us, you
                  can fill out our <Link to="/contact">feedback form</Link> and
                  we will get back to you!
                </p>

                <StyledButton
                  $type="secondary"
                  as={Link}
                  to="/contact"
                  className="btn"
                  children="Send Feedback"
                />
              </section>

              <Divider />

              <section id="privacy">
                <h3>Privacy</h3>
                <h2>Read about our privacy policy</h2>

                <p>
                  Our privacy policy outlines how Fast Poll uses and protects
                  any information that you share when using our website.
                </p>

                <StyledButton
                  $type="secondary"
                  as={Link}
                  to="/privacy"
                  className="btn"
                  children="Read our Privacy Policy"
                />
              </section>

              <Divider />

              <section id="terms">
                <h3>Terms</h3>
                <h2>Read about our terms of use</h2>

                <p>
                  Our terms of use, which together with our privacy policy,
                  govern Fast Poll's relationship with you in relation to this
                  website.
                </p>

                <StyledButton
                  $type="secondary"
                  as={Link}
                  to="/terms"
                  className="btn"
                  children="Read our Terms of Use"
                />
              </section>

              <Divider />

              <section id="contact">
                <h3>Say Hello</h3>
                <h2>Contact Us</h2>

                <p>
                  If you would like to get in touch with us to give us feedback,
                  ask a question or simply to say hello then you can drop us a
                  message using our <Link to="/contact">feedback form</Link>,
                  via{' '}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    children="Twitter"
                  />{' '}
                  or by sending us an email at{' '}
                  <a
                    href="mailto:hello@fast-poll.com"
                    children="hello@fast-poll.com"
                  />
                  .
                </p>
              </section>
            </SupportContent>
          </SupportWrapper>
        </Container>
      </Main>

      <Footer />
    </>
  );
};

export default Support;
