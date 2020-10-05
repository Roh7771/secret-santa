import { PersonType } from '@/types/general-types';
import React from 'react';
import { InitialItem } from './components';

type InitialListPropsType = {
  personList: PersonType[];
  handleDeleteButtonClick: (personNameToDelete: string) => void;
};

export const InitialList: React.FunctionComponent<InitialListPropsType> = ({
  personList,
  handleDeleteButtonClick,
}: InitialListPropsType) => (
  <section>
    {personList.map((person, index) => (
      <InitialItem
        key={`${person.name}-${index + 1}`}
        onDeleteButtonClick={handleDeleteButtonClick}
        name={person.name}
      />
    ))}
  </section>
);
