import { AppStatus, InitialPersonList } from '@/constants';
import { PersonType } from '@/types/general-types';
import distributeNames from '@/utils/distributeNames';
import React from 'react';
import { ResultScreen } from 'components/result-screen';
import { LoadingScreen } from 'components/loading-screen';
import { EditScreen } from 'components/edit-screen';

type Props = {};

export const App: React.FunctionComponent<Props> = () => {
  const [personList, setPersonList] = React.useState<PersonType[]>(
    InitialPersonList,
  );
  const [resultList, setResultList] = React.useState<PersonType[]>([]);
  const [appStatus, setAppStatus] = React.useState<AppStatus>(
    AppStatus.EDITING,
  );

  const handleAddButtonClick = (newPerson: PersonType) => {
    setPersonList(prevList => [...prevList, newPerson]);
  };

  const handleDeleteButtonClick = (personNameToDelete: string) => {
    setPersonList(prevList => {
      const newList = prevList.filter(
        person => person.name !== personNameToDelete,
      );
      return newList;
    });
  };

  const handleDistributeButtonClick = async() => {
    setAppStatus(AppStatus.LOADING);
    const result = await new Promise<PersonType[]>(resolve => {
      const distributedList = distributeNames(personList);
      setTimeout(() => {
        resolve(distributedList);
      }, 500);
    });
    setResultList(result);
    setAppStatus(AppStatus.DISTRIBUTED);
  };

  const handleEditListButtonClick = () => {
    setAppStatus(AppStatus.EDITING);
  };

  let mainContent: React.ReactElement;

  switch (appStatus) {
    case AppStatus.EDITING:
      mainContent = (
        <EditScreen
          handleAddButtonClick={handleAddButtonClick}
          handleDeleteButtonClick={handleDeleteButtonClick}
          handleDistributeButtonClick={handleDistributeButtonClick}
          personList={personList}
        />
      );
      break;

    case AppStatus.DISTRIBUTED:
      mainContent = (
        <ResultScreen
          personList={resultList}
          handleDistributeButtonClick={handleDistributeButtonClick}
          handleEditListButtonClick={handleEditListButtonClick}
        />
      );
      break;

    case AppStatus.LOADING:
      mainContent = <LoadingScreen />;
      break;

    default:
      mainContent = <h1>Что-то пошло не так</h1>;
      break;
  }

  return mainContent;
};
