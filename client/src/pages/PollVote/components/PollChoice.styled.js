import styled from 'styled-components';
import iconCheckBoxActive from '../../../assets/icon-checkbox-active.svg';
import iconCheckBox from '../../../assets/icon-checkbox.svg';

const PollChoice = ({ choice, selectedChoice, setSelectedChoice }) => {
  return (
    <StyledPollChoice>
      <input
        id={`choice-${choice._id}`}
        type="radio"
        name="pollChoice"
        checked={selectedChoice._id === choice._id}
        onChange={() => setSelectedChoice(choice)}
      />

      <label htmlFor={`choice-${choice._id}`}>{choice.name}</label>
    </StyledPollChoice>
  );
};

const StyledPollChoice = styled.div`
  input {
    -webkit-appearance: none;
  }

  label {
    display: block;
    cursor: pointer;
    position: relative;
    padding: 2.5rem 2rem 2.5rem 8rem;
    margin: 2rem 0;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 7px 14px 0 rgb(0 0 0 / 7%);
    font-size: 2.45rem;
    font-weight: 600;
    transition: ${({ theme }) => `box-shadow ${theme.transistion.duration}ms`};
    border: 2.5px solid transparent;

    @media screen and (max-width: 600px) {
      padding: 2.5rem 2rem 2rem 8rem;
      font-size: 2.25rem;
    }

    &:hover {
      box-shadow: 0px 10px 44px 10px rgb(233 235 243);
    }
  }

  input:checked + label {
    border: 2.5px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 7px 14px 0 rgb(74 217 127 / 20%) !important;
  }

  input:checked + label::before {
    content: '';
    position: absolute;
    left: 24px;
    width: 36px;
    height: 36px;
    top: 18px;
    background-image: url('${iconCheckBoxActive}');
    background-repeat: no-repeat;
    background-position: center;
    transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};
  }

  input:not(:checked) + label::before {
    content: '';
    position: absolute;
    left: 24px;
    width: 36px;
    height: 36px;
    top: 18px;
    border-radius: 100%;
    background-image: url('${iconCheckBox}');
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export default PollChoice;
