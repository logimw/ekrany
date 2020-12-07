import styled, { css } from 'styled-components';

const Panel = styled.section`
  display: grid;
  grid-template-rows: 0.5fr 1fr 6fr;
  grid-row-gap: 2rem;
  padding: 1rem;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    rgb(251, 251, 251) 0%,
    rgb(242, 242, 242) 50%,
    rgb(226, 226, 226) 100%
  );
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
