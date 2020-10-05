import { PersonType } from '@/types/general-types';
import React from 'react';
import { ResultList } from './components';

type ResultScreenPropsType = {
  personList: PersonType[];
  handleDistributeButtonClick: () => void;
  handleEditListButtonClick: () => void;
};

export const ResultScreen: React.FunctionComponent<ResultScreenPropsType> = ({
  personList,
  handleDistributeButtonClick,
  handleEditListButtonClick,
}: ResultScreenPropsType) => (
  <section>
    <ResultList personList={personList} />
    <button onClick={() => handleDistributeButtonClick()} type="button">
      Распределить еще разок
    </button>
    <button onClick={() => handleEditListButtonClick()} type="button">
      Отредактировать список
    </button>
  </section>
);
