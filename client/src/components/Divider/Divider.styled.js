import styled from 'styled-components';

const Divider = styled.div`
  width: 100%;
  height: ${({ height }) => height ?? '1.2px'};
  background-color: ${({ backgroundColor }) => backgroundColor ?? '#f0f0f0'};
  margin: ${({ margin }) => margin ?? '1rem 0'};
`;

export default Divider;
