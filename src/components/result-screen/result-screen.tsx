import { CSSVariable } from '@/constants';
import { PersonType } from '@/types/general-types';
import styled from '@emotion/styled';
import React from 'react';
import { ResultList } from './components';

type ResultScreenPropsType = {
  personList: PersonType[];
  handleDistributeButtonClick: () => void;
  handleEditListButtonClick: () => void;
};

const ResultScreenWrapper = styled('section')`
  margin: 20px 0;
  h1 {
    text-align: center;
    font-size: 30px;
    width: 70%;
    margin: 0 auto 20px auto;
  }

  .distribute-btn, .edit-btn {
    background-color: ${CSSVariable.BUTTON_COLOR};
    border: none;
    border-radius: 10px;
    padding: 20px;
    font-size: 22px;
    line-height: 24px;
    margin-bottom: 30px;
  }
`;

export const ResultScreen: React.FunctionComponent<ResultScreenPropsType> = ({
  personList,
  handleDistributeButtonClick,
  handleEditListButtonClick,
}: ResultScreenPropsType) => (
  <ResultScreenWrapper>
    <h1>Результаты:</h1>
    <ResultList personList={personList} />
    <button
      className="distribute-btn"
      onClick={() => handleDistributeButtonClick()}
      type="button"
    >
      Распределить еще разок
    </button>
    <button
      className="edit-btn"
      onClick={() => handleEditListButtonClick()}
      type="button"
    >
      Отредактировать список
    </button>
  </ResultScreenWrapper>
);
