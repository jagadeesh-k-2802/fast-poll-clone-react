import styled from 'styled-components';

const TextArea = styled.textarea`
  display: inline-block;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  font-family: inherit;
  font-weight: 500;
  font-size: 1.6rem;
  padding: 1.6rem;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
  border: 0;
  border-radius: 5px;
  height: ${({ height }) => height ?? 'auto'};
  margin: 1.2rem 0;
  color: #333;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 2px 4px 0 rgb(65 153 255 / 29%);
  }
`;

export default TextArea;
