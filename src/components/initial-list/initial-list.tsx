import React from 'react';
import { PersonType } from '../../general-types';
import InitialItem from '../initial-item/initial-item';

type InitialListPropsType = {
  personList: PersonType[];
  handleDeleteButtonClick: (personNameToDelete: string) => void;
};

const InitialList: React.FunctionComponent<InitialListPropsType> = ({
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

export default InitialList;
