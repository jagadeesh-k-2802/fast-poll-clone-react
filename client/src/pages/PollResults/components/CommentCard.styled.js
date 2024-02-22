import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import Flex from '../../../components/Flex/Flex.styled';
import iconCommentReply from '../../../assets/icon-comment-reply.svg';
import iconCommentMore from '../../../assets/icon-comment-more.svg';
import DropDown from '../../../components/DropDown/DropDown.styled';

const CommentCard = ({
  currentUser,
  comment,
  nested,
  setReply,
  onReport,
  hideReply,
  messageRef
}) => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const showDropDown = () => setDropDownVisible(true);
  const closeDropDown = () => setDropDownVisible(false);

  return (
    <>
      <StyledCommentCard id={comment._id} nested={nested}>
        <Link to={`/user/${comment.user.username}`}>
          <img
            src={`/avatar/${comment.user.avatar}`}
            alt={`user for the comment ${comment.message}`}
          />
        </Link>

        <div>
          <h3>
            <Link to={`/user/${comment.user.username}`}>
              {comment.user.fullName}
            </Link>
          </h3>
          <p>{comment.message}</p>

          <Flex gap="2rem" alignItems="center" className="footer">
            <time>Posted {moment(comment.createdAt).fromNow()}</time>

            <Flex gap="2rem">
              {currentUser && !nested && !hideReply && (
                <button
                  className="reply"
                  onClick={() => {
                    setReply(comment);
                    messageRef.current.focus();
                  }}
                >
                  Reply
                </button>
              )}

              <button className="more" onClick={showDropDown}>
                More
              </button>

              <DropDownWrapper>
                <DropDown
                  visible={dropDownVisible}
                  onHide={closeDropDown}
                  top="25px"
                  right="-110px"
                >
                  <DropDownContent>
                    <button
                      className="danger"
                      onClick={() => {
                        onReport(comment._id);
                        closeDropDown();
                      }}
                    >
                      Report Comment
                    </button>
                  </DropDownContent>
                </DropDown>
              </DropDownWrapper>
            </Flex>
          </Flex>
        </div>
      </StyledCommentCard>

      {/* Recursively render replies */}
      {comment?.replies?.map(nestedComment => (
        <CommentCard
          key={nestedComment._id}
          currentUser={currentUser}
          comment={nestedComment}
          onReport={onReport}
          nested
        />
      ))}
    </>
  );
};

const DropDownWrapper = styled.span`
  position: relative;
`;

const DropDownContent = styled.div`
  background-color: #fff;
  padding: 2rem;

  button {
    padding: 1rem 0;
    font-size: 1.6rem;

    &.danger {
      color: ${({ theme }) => theme.colors.danger};
    }
  }
`;

const StyledCommentCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 4rem 0;
  margin-left: ${({ nested }) => nested && '4rem'};
  border-top: solid 1.2px #f2f2f2;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 0;
    margin-left: ${({ nested }) => nested && '2rem'};

    div.footer {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  a {
    transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;

      @media screen and (max-width: 820px) {
        width: 60px;
        height: 60px;
      }
    }

    &:hover {
      opacity: 0.7;
    }
  }

  div {
    flex: 2;
    padding: 1rem 0;

    h3 {
      font-size: 2.35rem;

      a {
        color: #333;
        transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    p {
      color: #333;
      font-size: 1.8rem;
    }

    time {
      color: #bababa;
      font-size: 1.5rem;
      font-weight: 500;

      @media screen and (max-width: 600px) {
        display: block;
        width: 100%;
      }
    }

    button {
      background-color: transparent;
      font-size: 1.6rem;
      font-weight: 500;
      background-repeat: no-repeat;
      padding: 0 1rem 0 3rem;
      font-weight: 700;
      transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};

      &:hover {
        opacity: 0.6;
      }
    }

    button.reply {
      color: ${({ theme }) => theme.colors.secondary};
      background-image: url('${iconCommentReply}');
      background-position: left 2px center;
    }

    button.more {
      color: #aaa;
      background-image: url('${iconCommentMore}');
      background-position: left 0 center;
      padding-left: 3.2rem;
    }
  }
`;

export default CommentCard;
