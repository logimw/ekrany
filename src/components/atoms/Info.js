import styled from 'styled-components';

const Info = styled.div`
  padding: 1rem 2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.grey200};
  background-color: ${({ theme }) => theme.infoBg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  width: 200px;
`;

export default Info;
