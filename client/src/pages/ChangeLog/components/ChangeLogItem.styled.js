import styled from 'styled-components';
import changeLogLineRepeat from '../../../assets/changelog-line-repeat.svg';
import starIcon from '../../../assets/icon-changelog-star.svg';
import heartIcon from '../../../assets/icon-changelog-heart.svg';
import tickIcon from '../../../assets/icon-changelog-tick.svg';

const getBackgroundImage = icon => {
  switch (icon) {
    case 'star':
      return starIcon;
    case 'tick':
      return tickIcon;
    case 'heart':
      return heartIcon;
    default:
      return '';
  }
};

const ChangeLogItem = styled.div`
  padding-bottom: 6.5rem;
  background-image: url('${changeLogLineRepeat}');
  background-repeat: repeat-y;
  background-position: left 10px top;
`;

const ChangeLogItemInner = styled.div`
  background-image: url('${({ icon }) => getBackgroundImage(icon)}');
  position: relative;
  padding: 0 120px 0 45px;
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: left top;

  @media screen and (max-width: 720px) {
    padding-right: 0;
  }

  h3 {
    color: #333;
    font-size: 1.6rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  p {
    line-height: 1.25;
    font-size: 1.5rem;

    @media screen and (max-width: 720px) {
      margin-bottom: 1rem;
    }
  }

  time {
    position: absolute;
    right: 0px;
    top: 0px;
    font-size: 1.1rem;
    color: #9d9d9d;
    letter-spacing: -0.18px;
    text-align: right;
    font-weight: 500;
    width: 160px;

    @media screen and (max-width: 720px) {
      position: relative;
      color: #c1c1c1;
      text-align: left;
      width: 100%;
    }
  }
`;

export { ChangeLogItem, ChangeLogItemInner };
