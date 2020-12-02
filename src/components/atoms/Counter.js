import styled from 'styled-components';

const Counter = styled.span`
  font-size: ${({ theme }) => theme.fontSize.mega};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default Counter;
