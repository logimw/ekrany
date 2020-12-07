import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from '../atoms/Heading';
import Counter from '../atoms/Counter';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  border: 2px solid ${({ theme }) => theme.grey700};
  border-radius: 10px;
  overflow: hidden;
  min-height: 380px;
  flex: 1;
  gap: 12px;
  margin-bottom: 1rem;
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20%;
  background-color: ${({ currentCardCol, theme }) =>
    currentCardCol ? theme.cardsColor[currentCardCol] : 'white'};

  ${({ light }) =>
    light &&
    css`
      height: 80%;
      background-color: ${({ currentCardCol, theme }) =>
        currentCardCol ? theme.cardsColor[`${currentCardCol}Light`] : 'white'};
    `};
`;

const Card = ({ currentCard }) => {
  return (
    <StyledWrapper>
      <InnerWrapper currentCardCol={currentCard}>
        <Heading>
          {currentCard === 'total' && 'Wszystkie'}
          {currentCard === 'ok' && 'OK'}
          {currentCard === 'nokNot' && 'NOK Niepolakierowane'}
          {currentCard === 'nok' && 'NOK Polakierowane'}
        </Heading>
      </InnerWrapper>
      <InnerWrapper light currentCardCol={currentCard}>
        <Counter>2137</Counter>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  currentCard: PropTypes.oneOf(['total', 'ok', 'nokNot', 'nok']),
};

Card.defaultProps = {
  currentCard: 'total',
};

export default Card;
