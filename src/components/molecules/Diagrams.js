import React from 'react';
import styled from 'styled-components';

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Bar = styled.div`
  position: relative;
  flex: 1;
  height: 40rem;
  min-width: 20rem;
  width: auto;
  margin: 0 1rem;
  background: #2b862b;
`;

const InnerBar = styled.div`
  position: absolute;
  width: 100%;
  height: 35%;
  background: aquamarine;
  bottom: 0;
  left: 0;
`;

const Diagrams = () => {
  return (
    <InnerWrapper>
      <Bar>
        <InnerBar />
      </Bar>
      <Bar />
      <Bar />
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </InnerWrapper>
  );
};

export default Diagrams;
