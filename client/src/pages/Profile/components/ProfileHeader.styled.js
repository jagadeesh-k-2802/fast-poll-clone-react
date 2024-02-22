import styled from 'styled-components';
import facebookIcon from '../../../assets/icon-colour-icon-profile-facebook.svg';
import instagramIcon from '../../../assets/icon-colour-icon-profile-instagram.svg';
import twitterIcon from '../../../assets/icon-colour-icon-profile-twitter.svg';
import producthuntIcon from '../../../assets/icon-colour-icon-profile-producthunt.svg';

export const ProfileHeader = styled.header`
  padding: 15rem 0;
  background-color: #fff;

  @media screen and (max-width: 600px) {
    padding: 7.5rem 0;
  }
`;

export const ProfileHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  & > a {
    position: absolute;
    right: 0;
    bottom: -80px;
    padding: 1.25rem;
    font-size: 1.4rem;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;

export const SocialLink = ({ name, link }) => {
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

export const Left = styled.div`
  & > img {
    border-radius: 50%;
    height: 100px;
    width: 100px;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 6rem;

    @media screen and (max-width: 600px) {
      font-size: 4rem;
    }
  }

  p {
    font-size: 1.75rem;
    line-height: 1.2;
  }
`;

export const Right = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }

  div {
    background-color: #f8f8f8;
    padding: 2rem 3rem;
    border-radius: 5px;

    h3 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;
