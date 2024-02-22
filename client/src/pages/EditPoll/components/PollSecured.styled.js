import styled from 'styled-components';
import lockIcon from '../../../assets/icon-lock.svg';

const PollSecured = styled.p`
  font-size: 1.4rem;
  margin: 4rem 0;
  padding-left: 2.5rem;
  background-repeat: no-repeat;
  background-position: left top 3px;
  background-size: 14px;
  line-height: 1.8;
  background-image: url(${lockIcon});
`;

export default PollSecured;
