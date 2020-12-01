import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/mainTheme';
import Panel from './components/organisms/Panel';
import GlobalStyle from './theme/GlobalStyle';
import Heading from './components/atoms/Heading';

const Root = () => {
  return (
    <main>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Panel mb="200px">
            <Heading>Ekrany 4k!</Heading>
          </Panel>
          <Panel secondary>
            <h2>Shop stock 1</h2>
          </Panel>
          <Panel>
            <h2>Shop stock 2</h2>
          </Panel>
        </>
      </ThemeProvider>
    </main>
  );
};

export default Root;
