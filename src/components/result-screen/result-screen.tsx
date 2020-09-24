import React from 'react';
import { PersonType } from '../../general-types';
import ResultList from '../result-list/result-list';

type ResultScreenPropsType = {
  personList: PersonType[];
  handleDistributeButtonClick: () => void;
  handleEditListButtonClick: () => void;
};

const ResultScreen: React.FunctionComponent<ResultScreenPropsType> = ({
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

export default ResultScreen;
