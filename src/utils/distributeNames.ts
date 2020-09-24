/* eslint-disable no-loop-func */
import { PersonType } from '../general-types';
import getRandomInt from './getRandomInt';
import updatePersonStatus from './updatePersonStatus';

const createList = (list: PersonType[]) => {
  const personList = list.map(o => ({
    ...o,
  }));

  let isFailed = false;

  personList.forEach((personToDitribute, personToDitributeIndex) => {
    updatePersonStatus(personList);
    let zeroStatusCount = 0;
    let secondStatusCount = 0;
    personList.forEach(el => {
      if (el.status === 0) {
        zeroStatusCount += 1;
      }
      if (el.status === 2) {
        secondStatusCount += 1;
      }
    });
    if (
      (zeroStatusCount === 2 && secondStatusCount === personList.length - 2)
      || (zeroStatusCount === 1 && secondStatusCount === personList.length - 1)
    ) {
      isFailed = true;
      return;
    }
    const listWithoutCurrentPerson = personList.filter(
      person => person.name !== personToDitribute.name,
    );
    if (!personToDitribute.to) {
      let isAsigned = false;
      let randomInt = getRandomInt(0, listWithoutCurrentPerson.length - 1);
      while (!isAsigned) {
        if (
          !listWithoutCurrentPerson[randomInt].from
          && listWithoutCurrentPerson[randomInt].to !== personList[personToDitributeIndex].name
        ) {
          const indexFromInitialList = personList.findIndex(
            el => el.name === listWithoutCurrentPerson[randomInt].name,
          );
          personList[indexFromInitialList].from = personList[personToDitributeIndex].name;
          personList[personToDitributeIndex].to = personList[indexFromInitialList].name;
          isAsigned = true;
        }
        randomInt = getRandomInt(0, listWithoutCurrentPerson.length - 1);
      }
    }

    if (!personToDitribute.from) {
      let isAsigned = false;
      let randomInt = getRandomInt(0, listWithoutCurrentPerson.length - 1);
      while (!isAsigned) {
        if (
          !listWithoutCurrentPerson[randomInt].to
          && listWithoutCurrentPerson[randomInt].from !== personList[personToDitributeIndex].name
        ) {
          const indexFromWorkers = personList.findIndex(
            el => el.name === listWithoutCurrentPerson[randomInt].name,
          );
          personList[indexFromWorkers].to = personList[personToDitributeIndex].name;
          personList[personToDitributeIndex].from = personList[indexFromWorkers].name;
          isAsigned = true;
        }
        randomInt = getRandomInt(0, listWithoutCurrentPerson.length - 1);
      }
    }
  });

  if (isFailed) {
    return null;
  }

  return personList;
};

const distributeNames = (initialList: PersonType[]) => {
  let result = null;

  while (result === null) {
    result = createList(initialList);
  }

  return result;
};

export default distributeNames;
