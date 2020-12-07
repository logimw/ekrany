import styled from 'styled-components';

const Counter = styled.span`
  color: ${({ theme }) => theme.grey900};
  font-size: ${({ theme }) => theme.fontSize.mega};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default Counter;
