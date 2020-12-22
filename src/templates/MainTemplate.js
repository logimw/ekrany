import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Panel from '../components/organisms/Panel';
import Header from '../components/molecules/Header';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';
import Card from '../components/molecules/Card';
import Info from '../components/atoms/Info';
import Title from '../components/molecules/Title';
import Diagrams from '../components/molecules/Diagrams';

const GridWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`;

const MainTemplate = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <GridLayout>
        <Panel>
          <Title title="Shop Stock" />
          <Header title="Podsumowana ilość zawieszek w szt">
            <Info>Zawieszki</Info>
          </Header>
          <GridWrapper>
            <Card currentCard="total" />
            <Card currentCard="ok" />
            <Card currentCard="nok" />
            <Card currentCard="nokNot" />
          </GridWrapper>
        </Panel>
        <Panel>
          <Title title="Statystyki" />
          <Header title="Aktualny stan skidów">
            <Info>Skidy</Info>
          </Header>
          <GridWrapper>
            <Card currentCard="total" />
            <Card currentCard="ok" />
            <Card currentCard="nokNot" />
          </GridWrapper>
        </Panel>{' '}
        <Panel>
          <Title title="Statystyki" />
          <Header title="Aktualny stan skidów">
            <Info>Skidy</Info>
          </Header>
          <GridWrapper>
            <Card currentCard="total" />
            <Card currentCard="ok" />
            <Card currentCard="nokNot" />
          </GridWrapper>
          <Header title="Aktualny stan skidów">
            <Info>Skidy</Info>
          </Header>
          <GridWrapper>
            <Diagrams />
          </GridWrapper>
        </Panel>
      </GridLayout>
    </ThemeProvider>
  </div>
);

export default MainTemplate;
