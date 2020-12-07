import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../atoms/Heading';

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    position: relative;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    z-index: 10;

    span {
      padding: 0 5rem;
      background: rgba(242, 242, 242, 1);
    }

    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      top: 50%;
      left: -50vw;
      height: 1px;
      width: 100vw;
      background-color: ${({ theme }) => theme.grey200};
    }
  }
`;

const Title = ({ title }) => {
  return (
    <InnerWrapper>
      <Heading dark>
        <span>{title}</span>
      </Heading>
    </InnerWrapper>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
