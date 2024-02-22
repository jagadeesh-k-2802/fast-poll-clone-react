import Helmet from 'react-helmet';
import Main from './components/Main.styled';
import TextBlock from './components/TextBlock.styled';
import Container from '../../components/Container/Container.styled';
import H1 from '../../components/Typography/H1.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      <Main>
        <Container>
          <H1>Terms Of Use</H1>

          <TextBlock>
            <p>
              Welcome to Fast Poll. If you continue to browse and use this
              website you are agreeing to comply with and be bound by the
              following terms and conditions of use, which together with our
              privacy policy govern Fast Poll's relationship with you in
              relation to this website. The term Fast Poll or 'us' or 'we'
              refers to the owner of the website.
            </p>
          </TextBlock>

          <TextBlock>
            <p>The term 'you' refers to the user or viewer of Fast Poll's</p>
            <p>
              The use of this website is subject to the following terms of use:
            </p>
            <p>
              You will not provide any false personal information on Fast Poll,
              or create an account for anyone other than yourself without
              permission.
            </p>
            <p>
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </p>
            <p>
              When you publish content or information, it means that you are
              allowing everyone to access and use that information, and to
              associate it with you (i.e., your App and Company Name).
            </p>
            <p>
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or
              suitability of the information and materials found or offered on
              this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and
              we expressly exclude liability for any such inaccuracies or errors
              to the fullest extent permitted by law.
            </p>
            <p>
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services or information available through this website meet your
              specific requirements.
            </p>
            <p>
              This website contains material which is owned by or licensed to
              us. This material includes, but is not limited to, the design,
              layout, look, appearance and graphics. Reproduction is prohibited
              other than in accordance with the copyright notice, which forms
              part of these terms of use
            </p>
            <p>
              All trade marks reproduced in this website which are not the
              property of, or licensed to, the operator are acknowledged on the
              website. Unauthorised use of this website may give rise to a claim
              for damages and/or be a criminal offence.
            </p>
            <p>
              From time to time this website may also include links to other
              websites. These links are provided for your convenience to provide
              further information. They do not signify that we endorse the
              website(s). We have no responsibility for the content of the
              linked website(s).
            </p>
            <p>
              Your use of this website and any dispute arising out of such use
              of the website is subject to the laws of England, Scotland and
              Wales.
            </p>
            <p>
              The information contained in this website is for general
              information purposes only.
            </p>
            <p>
              The information is provided by Fast Poll and while we endeavour to
              keep the information up to date and correct, we make no
              representations or warranties of any kind, express or implied,
              about the completeness, accuracy, reliability, suitability or
              availability with respect to the website or the information,
              products, services, or related graphics contained on the website
              for any purpose.
            </p>
            <p>
              Any reliance you place on such information is therefore strictly
              at your own risk. In no event will we be liable for any loss or
              damage including without limitation, indirect or consequential
              loss or damage, or any loss or damage whatsoever arising from loss
              of data or profits arising out of, or in connection with, the use
              of this website. Through this website you are able to link to
              other websites which are not under the control of Fast Poll.
            </p>
            <p>
              We have no control over the nature, content and availability of
              those sites. The inclusion of any links does not necessarily imply
              a recommendation or endorse the views expressed within them.
            </p>
            <p>
              Every effort is made to keep the website up and running smoothly.
              However, Fast Poll takes no responsibility for, and will not be
              liable for, the website being temporarily unavailable due to
              technical issues beyond our control.
            </p>
          </TextBlock>
        </Container>
      </Main>

      <Footer />
    </>
  );
};

export default Terms;
