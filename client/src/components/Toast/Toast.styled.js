import styled from 'styled-components';
import TOAST_TYPES from './ToastEnums';

const getBackgroundColor = (type, theme) => {
  switch (type) {
    case TOAST_TYPES.SUCCESS:
      return theme.colors.success;
    case TOAST_TYPES.ERROR:
      return theme.colors.danger;
    case TOAST_TYPES.INFO:
      return theme.colors.lightYellow;
    default:
      break;
  }
};

const getColor = (type, theme) => {
  switch (type) {
    case TOAST_TYPES.SUCCESS:
    case TOAST_TYPES.ERROR:
      return '#fff';
    case TOAST_TYPES.INFO:
      return '#000';
    default:
      break;
  }
};

export const StyledToastsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 3rem;
  z-index: 100;

  @media screen and (max-width: 600px) {
    padding: 2rem;
  }
`;

export const StyledToast = styled.div`
  padding: 2.25rem;
  border-radius: 5px;
  font-size: 1.6rem;
  font-weight: 500;
  width: 350px;
  margin: 0.75rem 0;
  color: ${({ theme, $type }) => getColor($type, theme)};
  background-color: ${({ theme, $type }) => getBackgroundColor($type, theme)};
  line-height: 1.3;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0.5rem 0;
  }
`;
