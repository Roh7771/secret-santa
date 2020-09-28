import React from 'react';
import { PersonType } from '../../general-types';
import { Description } from './components/description';
import { Form } from './components/form';
import { GenerateButton } from './components/genetate-button';
import { InitialList } from './components/initial-list';

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
