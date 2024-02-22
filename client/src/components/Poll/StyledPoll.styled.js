import styled from 'styled-components';
import threeDots from '../../assets/icon-3-dots.svg';
import votingCloseIcon from '../../assets/icon-voting-closed.svg';
import iconBlueTick from '../../assets/icon-blue-tick.svg';
import padLockLocked from '../../assets/icon-padlock-locked-orange.svg';
import padLockUnlocked from '../../assets/icon-padlock-unlocked-blue.svg';

export const PollWrapper = styled.div`
  position: relative;

  @media screen and (max-width: 600px) {
    .dropdown {
      left: 30px;
      top: -145px;
    }
  }
`;

export const StyledPoll = styled.div`
  display: block;
  position: relative;
  background-color: #fff;
  box-shadow: 0px 7px 14px rgb(0 0 0 / 7%);
  padding: 4rem;
  border-radius: 5px;
  transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};
  margin: 4rem 0;

  @media screen and (max-width: 600px) {
    padding: 3.5rem;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 44px 10px rgb(233 235 243);
  }

  h3 {
    display: inline-block;
    text-transform: uppercase;
    font-size: 1.1rem;
    color: #333;
    background-color: #fffcb9;
    padding: 0.8rem;
    border-radius: 5px;
  }

  h2 {
    font-size: 3.75rem;
    margin: 2.5rem 0;
    color: #333;

    @media screen and (max-width: 600px) {
      font-size: 2.5rem;
    }
  }

  time {
    font-size: 1.8rem;
    font-weight: 600;
    color: #b1b1b1;

    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;

export const VoteCount = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  background: #f7fffa;
  border: 2.5px solid #4ad97f;
  box-sizing: border-box;
  box-shadow: 0px 7px 14px rgb(74 217 127 / 20%);
  border-radius: 23px;
  font-size: 1.6rem;
  font-weight: 700;
  color: #678873;
  padding: 1.2rem 2rem 1.2rem 2rem;

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const PollFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DropDownWrapper = styled.div`
  position: relative;

  & > button {
    z-index: 5;
    border: 0;
    background-repeat: no-repeat;
    background-position: right 6px center;
    padding: 0 3.8rem 0 0;
    background-color: transparent;
    background-image: url('${threeDots}');
    font-weight: 500;
    color: #555;
    opacity: 0.5;
    font-size: 1.75rem;
    transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};

    &:hover {
      opacity: 1;
    }
  }
`;

export const DropDownContent = styled.div`
  padding: 2rem 0;
  position: relative;
  z-index: 10;

  div.divider {
    margin: 2rem 0;
  }
`;

export const StyledDropDownItem = styled.button`
  border: 0;
  background-color: transparent;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;

  p {
    font-size: 1.5rem;
    color: #333;
  }

  span {
    display: inline-block;
    padding: 0.3rem 0.5rem;
    border-radius: 3px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const getPollInfoColor = props => {
  switch (props.$type) {
    case 'voting-closed':
      return props.theme.colors.primary;
    case 'public':
      return props.theme.colors.secondary;
    case 'private':
      return props.theme.colors.warning;
    default:
      break;
  }
};

const getPollInfoImage = props => {
  switch (props.$type) {
    case 'voting-closed':
      return votingCloseIcon;
    case 'public':
      return padLockUnlocked;
    case 'private':
      return padLockLocked;
    default:
      break;
  }
};

export const PollInfo = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  background-color: transparent;
  color: ${props => getPollInfoColor(props)};
  background-image: url('${props => getPollInfoImage(props)}');
  background-position: left 7px center;
  background-repeat: no-repeat;
  padding: 0 0 0 3.5rem;

  @media screen and (max-width: 600px) {
    display: none;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const VoteInfo = styled.div`
  position: relative;
  background-image: url('${iconBlueTick}');
  background-repeat: no-repeat;
  background-position: left 15px center;
  background-size: 22px;
  border-radius: 5px;
  background-color: #e7f5ff;
  color: #60859e;
  font-size: 1.4rem;
  padding: 2rem 2rem 2rem 5rem;
`;

export const VoteCreatedAt = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  color: #adb8bf;
  font-size: 1.2rem;
  position: absolute;
  background-color: #f8fcff;
  padding: 1rem;
  border-radius: 5px;
`;
