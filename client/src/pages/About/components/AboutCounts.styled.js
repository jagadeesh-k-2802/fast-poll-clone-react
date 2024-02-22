import styled from 'styled-components';

export const AboutCounts = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }
`;

export const AboutCount = styled.div`
  &:first-child {
    margin-right: 7rem;
  }

  h2 {
    color: #a6a9ae;
    font-size: 1.8rem;

    @media screen and (max-width: 720px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: #222831;
    font-size: 8rem;
    font-weight: 700;
    margin: 1.5rem 0;

    @media screen and (max-width: 720px) {
      font-size: 4rem;
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.warning};
    font-size: 1.8rem;

    @media screen and (max-width: 720px) {
      font-size: 1.5rem;
    }
  }
`;
