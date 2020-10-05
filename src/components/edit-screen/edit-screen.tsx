import { PersonType } from '@/types/general-types';
import React from 'react';
import {
  Description, Form, GenerateButton, InitialList,
} from './components';

type EditScreenPropsType = {
  personList: PersonType[];
  handleDeleteButtonClick: (personNameToDelete: string) => void;
  handleAddButtonClick: (person: PersonType) => void;
  handleDistributeButtonClick: () => void;
};

export const EditScreen: React.FunctionComponent<EditScreenPropsType> = ({
  personList,
  handleAddButtonClick,
  handleDeleteButtonClick,
  handleDistributeButtonClick,
}: EditScreenPropsType) => (
  <section>
    <Description />

    <InitialList
      handleDeleteButtonClick={handleDeleteButtonClick}
      personList={personList}
    />

    <Form onAddButtonCLick={handleAddButtonClick} />

    <GenerateButton
      onDistributeButtonClick={handleDistributeButtonClick}
      isDisabled={personList.length <= 2}
    />
  </section>
);
