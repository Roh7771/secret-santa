import { PersonType } from '@/types/general-types';
import styled from '@emotion/styled';
import React from 'react';

const ResultItemWrapper = styled('div')`
  display: flex;
  width: 70%;
  margin: 0 auto 30px auto;
`;

export const ResultItem: React.FunctionComponent<PersonType> = ({
  name,
  to,
}: PersonType) => (
  <ResultItemWrapper>
    <div className="name">{name}</div>
    <div className="dash">-</div>
    <div className="name">{to}</div>
  </ResultItemWrapper>
);
