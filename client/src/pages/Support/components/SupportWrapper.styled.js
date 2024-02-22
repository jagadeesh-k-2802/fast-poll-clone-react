import styled from 'styled-components';

export const SupportWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5rem;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: unset;
    gap: 3rem;
  }
`;

export const SupportContent = styled.div`
  section {
    margin: 2rem 0;
    padding: 3rem 0;

    h3 {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.warning};
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: 2.75rem;
      margin-bottom: 1rem;
    }

    p {
      line-height: 1.3;
      font-size: 1.7rem;
      margin: 2.25rem 0;
      color: #b1b1b1;
    }

    a:not(.btn) {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: 600;
    }
  }
`;
