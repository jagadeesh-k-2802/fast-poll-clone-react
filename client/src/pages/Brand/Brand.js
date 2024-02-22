import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Helmet from 'react-helmet';
import Main from './components/Main.styled';
import { BrandWrapper, BrandContent } from './components/BrandWrapper.styled';
import { BrandBlock } from './components/BrandWrapper.styled';
import StickySideBar from '../../components/StickySideBar/StickySideBar.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import Container from '../../components/Container/Container.styled';
import H1 from '../../components/Typography/H1.styled';
import StyledButton from '../../components/Button/Button.styled';
import Divider from '../../components/Divider/Divider.styled';
import brandLogoWhite from '../../assets/brand-logo-white.png';
import brandLogoDark from '../../assets/brand-logo-dark.png';
import brandScreens from '../../assets/brand-screens.jpg';

const Brand = () => {
  return (
    <>
      <Helmet>
        <title>Brand Assets | Fast Poll</title>
      </Helmet>

      <NavBar />

      <Main>
        <Container>
          <H1>Brand Assets</H1>
          <p>
            Below are our brand assets and information set out for the Fast Poll
            brand.
          </p>

          <BrandWrapper>
            <StickySideBar>
              <NavHashLink
                to="#logo"
                activeClassName="active"
                isActive={(_, loc) => loc.hash === '' || loc.hash === '#logo'}
                children="Logo"
              />

              <NavHashLink
                to="#screens"
                activeClassName="active"
                children="Screens"
              />
            </StickySideBar>

            <BrandContent>
              <section id="logo">
                <h3>Logo</h3>
                <h2>Download our logo</h2>

                <p>
                  Thanks for your interest in using the Fast Poll logo and
                  related assets. These guidelines will help you use our
                  identity. We ask you to respect our branding guidelines and
                  not alter the logo in any way.
                </p>

                <p>
                  Please keep the size and position relationship between the
                  symbol and logotype intact at all times.
                </p>

                <ul>
                  <li>
                    <strong>You should:</strong>
                  </li>
                  <li>
                    Use the Fast Poll logo in a blog post or news article about
                    Fast Poll.
                  </li>
                  <li>
                    Use the Fast Poll logo to promote your profile or poll on
                    Fast Poll.
                  </li>
                  <li>
                    Make sure no text or other elements encroach on the logo.
                  </li>
                </ul>

                <ul>
                  <li>
                    <strong>You should not:</strong>
                  </li>
                  <li>Manipulate the logo's color.</li>
                  <li>
                    Use the Fast Poll logo for your application’s icon or create
                    a modified version of it.
                  </li>
                  <li>
                    Use the Fast Poll logo integrated into your identity, brand
                    or logo.
                  </li>
                </ul>

                <BrandBlock bgColor="#fff">
                  <img
                    src={brandLogoWhite}
                    alt="The Fast Poll logo on a white background"
                  />
                </BrandBlock>

                <BrandBlock bgColor="#F2F6F6">
                  <img
                    src={brandLogoWhite}
                    alt="The Fast Poll logo on a gray background"
                  />
                </BrandBlock>

                <BrandBlock bgColor="#222">
                  <img
                    src={brandLogoDark}
                    alt="The Fast Poll logo on a black background"
                  />
                </BrandBlock>

                <p>We provide our logo in PNG, JPG and SVG.</p>

                <StyledButton $type="secondary" as={Link} to="/">
                  Download Screens
                </StyledButton>
              </section>

              <Divider />

              <section id="screens">
                <h3>Screens</h3>
                <h2>Download our screens</h2>

                <p>
                  If you want to feature Fast Poll on your website or
                  publication, we have created some screens for you to use.
                </p>

                <img
                  src={brandScreens}
                  alt="The Fast Poll website in a browswer window"
                />

                <p>We provide our logo in PNG, JPG and SVG.</p>

                <StyledButton $type="secondary" as={Link} to="/">
                  Download Screens
                </StyledButton>
              </section>
            </BrandContent>
          </BrandWrapper>
        </Container>
      </Main>

      <Footer />
    </>
  );
};

export default Brand;
