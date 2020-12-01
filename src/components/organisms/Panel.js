import styled, { css } from 'styled-components';

const Panel = styled.section`
  padding: 1rem;
  background-color: ${({ theme }) => theme.panel};
  border-radius: 5px;
  box-shadow: 3px 3px 6px #b1b1b1;
  margin-bottom: ${({ mb }) => mb || '1rem'};

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #81c3d7;
    `}
`;

export default Panel;
