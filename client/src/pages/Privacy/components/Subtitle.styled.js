import styled from 'styled-components';

const Subtitle = styled.h4`
  color: #333;
  margin: 5rem 0;
  font-size: 1.8rem;
  text-transform: uppercase;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
    line-height: 1.2;
  }
`;

export default Subtitle;
