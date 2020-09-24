import { PersonType } from '../general-types';

/* eslint-disable no-param-reassign */

export default (personList: PersonType[]) => {
  personList.forEach(person => {
    if (person.to || person.from) {
      person.status = 1;
    }
    if (person.to && person.from) {
      person.status = 2;
    }
  });
};
