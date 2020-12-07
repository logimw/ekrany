import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../atoms/Heading';
import Info from '../atoms/Info';

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(270deg, rgb(196, 200, 207) 0%, rgb(188, 188, 188) 100%);
  padding: 1rem;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Header = ({ title }) => {
  return (
    <InnerWrapper>
      <Info>Zawieszki</Info>
      <Heading dark>{title}</Heading>
    </InnerWrapper>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
