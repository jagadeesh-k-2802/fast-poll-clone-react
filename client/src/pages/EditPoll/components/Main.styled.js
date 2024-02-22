import styled from 'styled-components';
import iconPlus from '../../../assets/icon-plus.svg';

const Main = styled.main`
  position: relative;
  overflow: hidden;
  padding: 10rem 0;

  input,
  select,
  textarea {
    font-size: 1.75rem;
    padding: 2rem;
  }

  form {
    button[type='submit'] {
      padding: 2rem 3rem;
      font-size: 2rem;
    }

    button[data-name='add-btn'] {
      padding: 2rem 3rem;
      font-size: 2rem;
      margin: -1rem 0 2.5rem 0;
      background-image: url('${iconPlus}');
      background-repeat: no-repeat;
      background-position: right 20px top 25px;
      background-size: 17px;
      padding-right: 5rem;
    }
  }
`;

export default Main;
