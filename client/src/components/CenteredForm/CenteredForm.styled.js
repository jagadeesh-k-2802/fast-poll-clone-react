import styled from 'styled-components';

// Form used in login, sign-up, contact and password-reset

const CenteredForm = styled.form`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;

  @media screen and (max-width: 720px) {
    padding: 2rem;
  }

  p {
    margin: 2rem 0;
  }

  a {
    color: inherit;
    font-weight: 600;
  }

  button {
    margin: 1.2rem 0;
    font-size: 2rem;
  }
`;

export default CenteredForm;
