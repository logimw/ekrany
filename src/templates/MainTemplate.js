import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Info from '../components/atoms/Info';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';
import Card from '../components/molecules/Card';

const GridWrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
`;

const MainTemplate = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Info>Zawieszki</Info>
        <GridWrapper>
          <Card currentCard="total" />
          <Card currentCard="ok" />
          <Card currentCard="nok" />
          <Card currentCard="nokNot" />
        </GridWrapper>
      </>
    </ThemeProvider>
  </div>
);

export default MainTemplate;
