import { PersonType } from '@/types/general-types';
import React from 'react';

export const ResultItem: React.FunctionComponent<PersonType> = ({
  name,
  to,
}: PersonType) => (
  <div>
    <div>{name}</div>
    <div>-</div>
    <div>{to}</div>
  </div>
);
