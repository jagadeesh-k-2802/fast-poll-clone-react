import styled from 'styled-components';
import { darken } from 'polished';

const getButtonBackgroundColor = ({ theme, ...props }) => {
  switch (props.$type) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.secondary;
    case 'danger':
      return theme.colors.danger;
    case 'warning':
      return theme.colors.warning;
    case 'brown':
      return theme.colors.brown;
    case 'pink':
      return theme.colors.pink;
    case 'lightGray':
      return '#f4f4f4';
    default:
      return 'transparent';
  }
};

const getButtonBorder = ({ theme, ...props }) => {
  switch (props.$type) {
    case 'ghost':
      return '#DCDCDC';
    default:
      return 'transparent';
  }
};

const getButtonColor = ({ theme, ...props }) => {
  switch (props.$type) {
    case 'ghost':
      return '#9D9D9D';
    case 'lightGray':
      return '#7c7c7c';
    default:
      return '#fff';
  }
};

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 5px;
  text-align: center;
  border: solid 2px ${props => getButtonBorder(props)};
  padding: 1.6rem;
  background-color: ${props => getButtonBackgroundColor(props)};
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${props => getButtonColor(props)};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};
  cursor: pointer;

  &:disabled {
    filter: grayscale(0.85);
  }

  &:hover {
    background-color: ${props => darken(0.1, getButtonBackgroundColor(props))};
  }
`;

export default StyledButton;
