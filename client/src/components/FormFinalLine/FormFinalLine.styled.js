import styled from 'styled-components';

const FormFinalLine = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.darkGray};;
  text-align: center;
  margin: 1.2rem 0

  a {
    color: ${({ theme }) => theme.colors.navy};
  }
`;

export default FormFinalLine;
