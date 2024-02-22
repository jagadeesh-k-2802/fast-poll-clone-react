import styled from 'styled-components';
import threeDots from '../../../assets/icon-3-dots.svg';
import shareIcon from '../../../assets/icon-share-fixed.svg';

const DropDownWrapper = styled.div`
  position: relative;

  & > button {
    background-color: transparent;
    font-size: 1.6rem;
    padding: 2.75rem 3.5rem 2.75rem 2.75rem;
    margin-right: 1.25rem;
    color: #555;
    opacity: 0.6;
    font-weight: 500;
    transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};
    border: 0;
    background-repeat: no-repeat;
    background-position: right 6px center;

    &.settings {
      background-image: url('${threeDots}');
    }

    &.share {
      background-image: url('${shareIcon}');
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export default DropDownWrapper;
