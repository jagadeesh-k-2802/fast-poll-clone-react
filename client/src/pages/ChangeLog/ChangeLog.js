import Helmet from 'react-helmet';
import Main from './components/Main.styled';
import { ChangeLogItem } from './components/ChangeLogItem.styled';
import { ChangeLogItemInner } from './components/ChangeLogItem.styled';
import ChangeLogBody from './components/ChangeLogBody.styled';
import Container from '../../components/Container/Container.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import H1 from '../../components/Typography/H1.styled';

const changeLogData = [
  {
    icon: 'star',
    title: 'New Ad Free Pro Plan',
    description:
      'Due to high demand we now have a new Ad Free Pro Plan which allows members to completely remove all ads from their polls.',
    date: 'September 2020'
  },
  {
    icon: 'tick',
    title: 'New Annual Pro Plans',
    description: 'Users can now take out an Annual Pro plan.',
    date: 'August 2020'
  },
  {
    icon: 'tick',
    title: 'New Pro feature - Hide sharing options',
    description: 'Pro members can now hide all sharing options for a poll.',
    date: 'July 2020'
  },
  {
    icon: 'tick',
    title: 'New Pro feature - More poll options',
    description:
      'Pro members can now create a poll with up to 30 options instead of the standard 15.',
    date: 'July 2020'
  },
  {
    icon: 'tick',
    title: 'New Sharing Options',
    description: 'Added WhatsApp and improved url sharing functionality.',
    date: 'May 2020'
  },
  {
    icon: 'tick',
    title: 'Futher improvements to our voting algorithm voting patterns',
    description:
      'Another set of improvements to our existing voting algorithm to detect and prevent duplicate voting patterns.',
    date: 'May 2020'
  },
  {
    icon: 'star',
    title: 'Pro has arrived',
    description:
      'Pro users can now gain access to advanced features like, adding images to polls, setting an auto end date, saving drafts and more.',
    date: 'April 2020'
  },
  {
    icon: 'star',
    title: 'Poll editing',
    description:
      'Registered users can now easily edit polls, this is only available if a poll has no votes. We do this to help keep polls and voting patterns accurate and transparent.',
    date: 'March 2020'
  },
  {
    icon: 'tick',
    title: 'Improved QR Code functionality',
    description:
      'On the poll results page users can now switch between the vote or results page for a QR code.',
    date: 'February 2020'
  },
  {
    icon: 'tick',
    title: 'Styling improvements around poll creation',
    description:
      'Minor UI updates to improve the flow and UX when creating a poll.',
    date: 'February 2020'
  },
  {
    icon: 'tick',
    title: 'Released new design for all emails sent by us',
    description:
      'Text and design improvements to all system emails sent by us.',
    date: 'February 2020'
  },
  {
    icon: 'tick',
    title: 'Improved algorithm around duplicate voting patterns',
    description:
      'Further improvements to our existing voting algorithm to detect and prevent duplicate voting patterns.',
    date: 'February 2020'
  },
  {
    icon: 'tick',
    title: 'Add Captcha security option',
    description:
      'Allow users to add Captcha security for visitors voting on their poll.',
    date: 'January 2020'
  },
  {
    icon: 'tick',
    title: 'Updated navigation and footer',
    description: 'Improved styling for our main navigation and footer.',
    date: 'January 2020'
  },
  {
    icon: 'star',
    title: 'New "About Us" page',
    description: 'Complete redesign and build of our about us page.',
    date: 'January 2020'
  },
  {
    icon: 'tick',
    title: 'Improved Comments',
    description: 'Add ability to report or link to comments posted on a poll.',
    date: 'December 2019'
  },
  {
    icon: 'star',
    title: 'Fast Poll Teams',
    description:
      'Brand new feature that allows Teams to vote and gather anonymous feedback privately.',
    date: 'December 2019'
  },
  {
    icon: 'tick',
    title: 'New Brand and Support pages',
    description:
      'Added brand assets page along with new Fast Poll support page.',
    date: 'November 2019'
  },
  {
    icon: 'tick',
    title: 'Add colours for poll options',
    description:
      'Gives visitors the ability to select a colour for poll options.',
    date: 'October 2019'
  },
  {
    icon: 'star',
    title: 'Add multiple voting for polls',
    description:
      'Added the most requested feature to date, allowing visitors to cast multiple votes on a single poll.',
    date: 'October 2019'
  },
  {
    icon: 'tick',
    title: 'New Design for our home page',
    description: 'A much needed new design for our home page.',
    date: 'September 2019'
  },
  {
    icon: 'star',
    title: 'New Dashboard, My Polls and My Votes pages',
    description:
      'Giving you more information and control over your polls and voting.',
    date: 'August 2019'
  },
  {
    icon: 'tick',
    title: 'Improved Poll footer on mobile',
    description:
      'Huge improvement to our poll page when using a mobile device, allowing users to see votes total, share and vote from a single footer.',
    date: 'August 2019'
  },
  {
    icon: 'star',
    title: 'New Logo',
    description:
      'A much needed update to the type used in our logo and branding.',
    date: 'July 2019'
  },
  {
    icon: 'tick',
    title: 'Improved ordering and filtering for polls',
    description: 'Improved ordering options for public and users polls.',
    date: 'July 2019'
  },
  {
    icon: 'tick',
    title: 'Add QR Code sharing for polls',
    description:
      'For use at a public event or conference to allow large groups of people to access a poll easily.',
    date: 'June 2019'
  },
  {
    icon: 'tick',
    title: 'Allow for voting to be closed on polls',
    description:
      'Gives more control and the ability to end voting on a poll when the creator decides.',
    date: 'June 2019'
  },
  {
    icon: 'tick',
    title: 'Add feedback form',
    description:
      'Allowing users to provide feedback and shape the future of Fast Poll.',
    date: 'May 2019'
  },
  {
    icon: 'tick',
    title: 'General performance updates and improvements',
    description: 'Improve performance and loading post launch.',
    date: 'April 2019'
  },
  {
    icon: 'heart',
    title: 'Launched Fast Poll!',
    description: 'Release initial MVP to the public!',
    date: 'December 2018'
  }
];

const ChangeLog = () => {
  return (
    <>
      <Helmet>
        <title>Change Log | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      <Main>
        <Container>
          <H1>See what’s new at Fast Poll</H1>
          <p>Check out the latest updates below.</p>

          <ChangeLogBody>
            {changeLogData.map((item, index) => (
              <ChangeLogItem key={index}>
                <ChangeLogItemInner icon={item.icon}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <time>{item.date}</time>
                </ChangeLogItemInner>
              </ChangeLogItem>
            ))}
          </ChangeLogBody>
        </Container>
      </Main>

      <Footer />
    </>
  );
};

export default ChangeLog;
