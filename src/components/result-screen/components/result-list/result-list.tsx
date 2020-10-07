import { PersonType } from '@/types/general-types';
import styled from '@emotion/styled';
import React from 'react';
import { ResultItem } from './components/result-item';

type ResultListPropsType = {
  personList: PersonType[];
};

const ResultListWrapper = styled('section')`
  .container {
    display: flex;
    width: 70%;
    margin: 0 auto 15px auto;
  }

  .name {
    width: 40%;
  }

  .dash {
    width: 10%;  
  }

  .dash, .name {
    text-align: center;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .name_top {
    font-weight: bold;
  }
`;

export const ResultList: React.FunctionComponent<ResultListPropsType> = ({
  personList,
}: ResultListPropsType) => (
  <ResultListWrapper>
    <div className="container">
      <div className="name name_top">Кто</div>
      <div className="dash" />
      <div className="name name_top">Кому</div>
    </div>
    {personList.map(person => (
      <ResultItem {...person} />
    ))}
  </ResultListWrapper>
);
