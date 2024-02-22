import facebookIcon from '../../../assets/icon-colour-icon-profile-facebook.svg';
import instagramIcon from '../../../assets/icon-colour-icon-profile-instagram.svg';
import twitterIcon from '../../../assets/icon-colour-icon-profile-twitter.svg';
import producthuntIcon from '../../../assets/icon-colour-icon-profile-producthunt.svg';

const SocialLink = ({ name, link }) => {
  const getIcon = () => {
    switch (name) {
      case 'facebook':
        return facebookIcon;
      case 'instagram':
        return instagramIcon;
      case 'twitter':
        return twitterIcon;
      case 'producthunt':
        return producthuntIcon;
      default:
        return '';
    }
  };

  if (!link) {
    return null;
  }

  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      <img src={getIcon()} alt={name} />
    </a>
  );
};

export default SocialLink;
