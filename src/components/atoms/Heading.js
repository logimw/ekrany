import styled from 'styled-components';

const Heading = styled.h2`
  color: ${({ theme, dark }) => (dark ? theme.grey900 : theme.grey200)};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0 2rem;
`;
export default Heading;
