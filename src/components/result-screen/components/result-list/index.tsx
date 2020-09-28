import React from 'react';
import { PersonType } from '../../../../general-types';
import { ResultItem } from './components/result-item';

type ResultListPropsType = {
  personList: PersonType[];
};

export const ResultList: React.FunctionComponent<ResultListPropsType> = ({
  personList,
}: ResultListPropsType) => (
  <section>
    {personList.map(person => (
      <ResultItem {...person} />
    ))}
  </section>
);
