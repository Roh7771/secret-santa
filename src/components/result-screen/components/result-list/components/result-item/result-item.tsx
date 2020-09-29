import React from 'react';
import { PersonType } from '../../../../../../types/general-types';

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