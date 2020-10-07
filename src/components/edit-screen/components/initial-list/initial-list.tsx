import { PersonType } from '@/types/general-types';
import styled from '@emotion/styled';
import React from 'react';
import { InitialItem } from './components';

type InitialListPropsType = {
  personList: PersonType[];
  handleDeleteButtonClick: (personNameToDelete: string) => void;
};

const InitialListWrapper = styled('section')`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 0 auto 20px auto;
`;

export const InitialList: React.FunctionComponent<InitialListPropsType> = ({
  personList,
  handleDeleteButtonClick,
}: InitialListPropsType) => (
  <InitialListWrapper>
    {personList.map((person, index) => (
      <InitialItem
        key={`${person.name}-${index + 1}`}
        onDeleteButtonClick={handleDeleteButtonClick}
        name={person.name}
      />
    ))}
  </InitialListWrapper>
);
