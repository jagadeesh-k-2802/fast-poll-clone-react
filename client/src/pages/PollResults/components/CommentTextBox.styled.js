import styled from 'styled-components';

const CommentTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 2.75rem 0;
  border-top: solid 1.2px #f2f2f2;
  position: relative;

  &::after {
    content: 'Reply';
    display: ${({ reply }) => !reply && 'none'};
    position: absolute;
    right: -22px;
    top: 25px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    padding: 1rem 1.5rem;
    border-radius: 25px;
    font-weight: 600;
    font-size: 1.5rem;
    box-shadow: 0 0 10px 0 rgb(65 153 255 / 45%);
  }

  img {
    width: ${({ reply }) => (reply ? '60px' : ' 70px')};
    height: ${({ reply }) => (reply ? '60px' : ' 70px')};
    border-radius: 50%;
    margin: 1.2rem 0;

    @media screen and (max-width: 820px) {
      display: none;
    }

    &.reply-img {
      margin-left: -5rem;
    }
  }

  form {
    flex: 2;

    textarea {
      border: solid 2px #ebebeb;
      width: 100%;
      resize: none;
      box-shadow: none;
    }

    button {
      padding: 1.8rem 3rem;
      font-size: 1.8rem;
      margin: 1rem 0;
    }
  }
`;

export default CommentTextBox;
