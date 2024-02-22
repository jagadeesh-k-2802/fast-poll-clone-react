import styled from 'styled-components';

const UserNamePreview = styled.span`
  display: inline-block;
  padding: 1.4rem;
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.colors.lightYellow};
  font-weight: 400;
  border-radius: 5px;
  color: #333;
`;

export default UserNamePreview;
