import Helmet from 'react-helmet';
import Main from './components/Main.styled';
import { AboutHeader, AboutHeaderText } from './components/AboutHeader.styled';
import AboutImages from './components/AboutImages.styled';
import { AboutCounts, AboutCount } from './components/AboutCounts.styled';
import H1 from '../../components/Typography/H1.styled';
import Container from '../../components/Container/Container.styled';
import TextBlock from './components/TextBlock.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import aboutHeaderImgOne from '../../assets/about-header-image-1.jpg';
import aboutHeaderImgTwo from '../../assets/about-header-image-2.jpg';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      <Main>
        <AboutHeader>
          <Container>
            <AboutHeaderText>
              <h3>About Us</h3>
              <H1>Improving the way online voting is done</H1>
            </AboutHeaderText>

            <AboutImages>
              <img src={aboutHeaderImgOne} alt="Graffitti" />
              <img src={aboutHeaderImgTwo} alt="Modern workspace" />
            </AboutImages>
          </Container>
        </AboutHeader>

        <Container>
          <TextBlock>
            <AboutCounts>
              <AboutCount>
                <h2>More than</h2>
                <p>2,000,000</p>
                <h3>Votes cast to date</h3>
              </AboutCount>

              <AboutCount>
                <h2>More than</h2>
                <p>50k</p>
                <h3>Polls created to date</h3>
              </AboutCount>
              <AboutCount></AboutCount>
            </AboutCounts>
          </TextBlock>

          <TextBlock>
            <h3>2019</h3>
            <h2>Updates in our first year</h2>

            <ul>
              <li>Secure Login to Vote feature.</li>
              <li>
                Multiple design updates to our homepage, user dashboard and lots
                of other areas.
              </li>
              <li>New multiple votes option for polls.</li>
              <li>
                Complete teams feature that allows teams to have custom branded,
                secure private polls.
              </li>
              <li>Added advanced comments to polls.</li>
              <li>
                Advanced control over polls, like open/closing voting and
                enabling/disabling comments.
              </li>
              <li>Improved use profiles.</li>
            </ul>
            <p>And many more...</p>
          </TextBlock>

          <TextBlock>
            <h2>What’s next?</h2>
            <p>
              We are committed to improving Fast Poll based on our users
              feedback. We have plans to create a paid pro account that will
              give extra features and more detailed info around polls and
              possible team accounts, ideal for companies to ask a question or
              gather feedback from a team of users that have access to 100%
              private polls.
            </p>
          </TextBlock>

          <TextBlock>
            <h2>Who created Fast Poll?</h2>
            <p>
              A designer and developer called Jack. You can find him on{' '}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter.
              </a>
            </p>
          </TextBlock>
        </Container>
      </Main>

      <Footer />
    </>
  );
};

export default About;
