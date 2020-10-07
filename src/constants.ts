import { PersonType } from './types/general-types';

export enum AppStatus {
  DISTRIBUTED,
  LOADING,
  EDITING,
}

export const LOADING_TIME = 13000;

export const CSSVariable = {
  BUTTON_COLOR: '#FF9140',
};

export const INITIAL_PERSON_LIST: PersonType[] = [
  {
    name: 'Егор',
    to: null,
    from: null,
    status: 0,
  },
  {
    name: 'Эльза',
    to: null,
    from: null,
    status: 0,
  },
  {
    name: 'Владимир Александрович',
    to: null,
    from: null,
    status: 0,
  },
  {
    name: 'Алина',
    to: null,
    from: null,
    status: 0,
  },
  {
    name: 'Булат',
    to: null,
    from: null,
    status: 0,
  },
  {
    name: 'Дима',
    to: null,
    from: null,
    status: 0,
  },
  {
    name: 'Диана',
    to: null,
    from: null,
    status: 0,
  },
  {
    name: 'Рома',
    to: null,
    from: null,
    status: 0,
  },
  {
    name: 'Алсу',
    to: null,
    from: null,
    status: 0,
  },
  {
    name: 'Рамиля',
    to: null,
    from: null,
    status: 0,
  },
];

export const SENTENCES_LIST: string[] = [
  'Соотносим характеры людей',
  'Соотносим характеры людей',
  'Соотносим характеры людей',
  'Соотносим характеры людей',
  'Соотносим характеры людей',
];
