import React from 'react';
import { PersonType } from '../../general-types';
import ResultItem from '../result-item/result-item';

type ResultListPropsType = {
  personList: PersonType[];
};

const ResultList: React.FunctionComponent<ResultListPropsType> = ({
  personList,
}: ResultListPropsType) => (
  <section>
    {personList.map(person => (
      <ResultItem {...person} />
    ))}
  </section>
);

export default ResultList;
