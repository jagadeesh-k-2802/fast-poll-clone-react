import styled from 'styled-components';
import twitterIcon from '../../../assets/icon-colour-icon-profile-twitter.svg'
import facebookIcon from '../../../assets/icon-colour-icon-profile-facebook.svg'
import whatsappIcon from '../../../assets/icon-whatsapp.svg'
import linkIcon from '../../../assets/icon-link.svg'
import qrCodeIcon from '../../../assets/icon-qr-code.svg'

export const UserDropDownContent = styled.div`
  padding: 2rem;
  text-align: center;

  img[alt='poll owner avatar'] {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin: 1rem 0;
  }

  h3 {
    margin: 1rem 0;
    font-size: 2rem;
  }
`;

export const SettingsDropDownContent = styled.div`
  padding: 2rem 0;
  position: relative;
  z-index: 10;

  button {
    padding: 0 2.5rem;
  }

  div.divider {
    margin: 2rem 0;
  }
`;

export const ShareDropDownContent = styled.div`
  padding: 1.8rem;

  a,
  button {
    display: inline-flex;
    width: 100%;
    font-weight: 500;
    font-size: 1.5rem;
    background-color: transparent;
    padding: 1rem;
    background-repeat: no-repeat;
    background-size: 18px;
    background-position: center right;

    &.twitter {
      color: ${({ theme }) => theme.colors.twitterColor};
      background-image: url('${twitterIcon}');
    }

    &.facebook {
      color: ${({ theme }) => theme.colors.facebookColor};
      background-image: url('${facebookIcon}');
    }

    &.whatsapp {
      color: ${({ theme }) => theme.colors.whatsappColor};
      background-image: url('${whatsappIcon}');
    }

    &.link {
      color: ${({ theme }) => theme.colors.warning};
      background-image: url('${linkIcon}');
    }

    &.qr-code {
      color: ${({ theme }) => theme.colors.purple};
      background-image: url('${qrCodeIcon}');
    }
  }
`;
