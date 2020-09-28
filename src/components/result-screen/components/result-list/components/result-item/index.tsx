import React from 'react';
import { PersonType } from '../../../../../../general-types';

export const ResultItem: React.FunctionComponent<PersonType> = ({
  name,
  to,
}: PersonType) => <div>{`${name} - ${to}`}</div>;
