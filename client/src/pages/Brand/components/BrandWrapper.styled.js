import styled from 'styled-components';

export const BrandWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5rem;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: unset;
    gap: 1rem;
  }
`;

export const BrandContent = styled.div`
  section {
    margin: 2rem 0;
    padding: 3rem 0;

    @media screen and (max-width: 720px) {
      padding: 0;
    }

    &#screens {
      img {
        margin: 1.5rem 0;
        border-radius: 5px;
      }
    }

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
      font-size: 1.6rem;
      margin: 2.25rem 0;
      color: #b1b1b1;
    }

    ul {
      list-style: none;
      margin: 4rem 0;

      li {
        font-size: 1.6rem;
        margin: 1rem 0;
        color: inherit;
        color: #b1b1b1;
        line-height: 1.3;

        strong {
          color: #333;
        }
      }
    }
  }
`;

export const BrandBlock = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  padding: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
  }
`;
