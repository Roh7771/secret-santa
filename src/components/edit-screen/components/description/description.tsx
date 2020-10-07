import React from 'react';
import styled from '@emotion/styled';
import santaImg from '@/img/santa.png';

const DescriptionWrapper = styled('section')`
  margin: 20px 0;

  h1 {
    text-align: center;
    font-size: 30px;
    width: 70%;
    margin: 0 auto 20px auto;
  }

  ol {
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    margin-bottom: 30px;
  }

  img {
    width: 30%;
    display: block;
    margin: 0 auto;
  }
`;

export const Description: React.FunctionComponent<{}> = () => (
  <DescriptionWrapper>
    <h1>Организуй тайный обмен подарками между друзьями или коллегами!</h1>
    <ol>
      <li>Создай список участников</li>
      <li>Проведи жеребьевку</li>
      <li>Разошли результаты</li>
    </ol>
    <img src={santaImg} alt="Санта" />
  </DescriptionWrapper>
);
