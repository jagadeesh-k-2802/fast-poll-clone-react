import styled from 'styled-components';

const CommentsWrapper = styled.div`
  background-color: #fff;
  border-bottom: 2px solid #fafafa;
  padding: 5rem;
  margin-top: 3rem;
  display: ${({ hide }) => hide && 'none'};

  @media screen and (max-width: 820px) {
    padding: 1.2rem;
  }

  h2 {
    font-size: 2.75rem;
  }

  button.load-more-btn {
    padding: 1.25rem 4rem;
    margin: 1.6rem 0;
    font-size: 1.5rem;
  }
`;

export default CommentsWrapper;
