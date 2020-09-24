import React from 'react';
import { PersonType } from '../../general-types';
import Form from '../form/form';
import GenerateButton from '../generate-button/generate-button';
import InitialList from '../initial-list/initial-list';

type EditScreenPropsType = {
  personList: PersonType[];
  handleDeleteButtonClick: (personNameToDelete: string) => void;
  handleAddButtonClick: (person: PersonType) => void;
  handleDistributeButtonClick: () => void;
};

const EditScreen: React.FunctionComponent<EditScreenPropsType> = ({
  personList,
  handleAddButtonClick,
  handleDeleteButtonClick,
  handleDistributeButtonClick,
}: EditScreenPropsType) => (
  <section>
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

export default EditScreen;
