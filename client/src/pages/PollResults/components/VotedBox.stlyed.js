import styled from 'styled-components';

const VotedBox = styled.div`
  margin-top: 2rem 0;
  background-color: #e7f5ff;
  padding: 2.5rem 2.75rem;
  border-radius: 5px;
  color: #60859e;
  font-size: 1.5rem;

  @media screen and (max-width: 600px) {
    padding: 2rem;
    font-size: 1.3rem;
  }

  strong {
    color: #375e77;
  }
`;

export default VotedBox;
