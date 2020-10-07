import { CSSVariable, SENTENCES_LIST } from '@/constants';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

const loading = keyframes`
  0% {
    width: 0;
  }
  20% {
    width: 10%;
  }
  25% {
    width: 24%;
  }
  43% {
    width: 41%;
  }
  56% {
    width: 50%;
  }
  66% {
    width: 52%;
  }
  71% {
    width: 60%;
  }
  75% {
    width: 76%;
  }
  94% {
    width: 86%;
  }
  100% {
    width: 100%;
  }
`;

const sentenceScroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  5% {
    transform: translateX(0%);
  }
  20% {
    transform: translateX(0%);
  }
  25% {
    transform: translateX(-100%);
  }
  40% {
    transform: translateX(-100%);
  }
  45% {
    transform: translateX(-200%);
  }
  60% {
    transform: translateX(-200%);
  }
  65% {
    transform: translateX(-300%);
  }
  80% {
    transform: translateX(-300%);
  }
  85% {
    transform: translateX(-400%);
  }
  100% {
    transform: translateX(-400%);
  }  
`;

const LoadingScreenWrapper = styled('section')`
  width: 100%;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .outer-bar {
    width: 60%;
    margin: 0 auto;
    height: 10px;
    background-color: ${CSSVariable.BUTTON_COLOR};
    border-radius: 60px;
  }
  .inner-bar {
    height: 10px;
    width: 100%;
    animation: ${loading} 13s;
    background-color: red;
    border-radius: 60px;
  }
  .sentences-container {
    height: 40%;
    width: 100%;
    position: relative;
    animation: ${sentenceScroll} 13s linear;
    transform: translateX(100%);
  }
  .sentence {
    text-align: center;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 26px;
  }
`;

export const LoadingScreen: React.FC<{}> = () => (
  <LoadingScreenWrapper className="loading-screen">
    <div className="sentences-container">
      {SENTENCES_LIST.map((sentence, index) => (
        <div
          className="sentence"
          style={{ position: 'absolute', right: `-${index * 100}%`, top: 0 }}
        >
          {sentence}
        </div>
      ))}
    </div>
    <div className="outer-bar">
      <div className="inner-bar" />
    </div>
  </LoadingScreenWrapper>
);
