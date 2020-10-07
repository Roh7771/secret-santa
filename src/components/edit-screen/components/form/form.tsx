import { CSSVariable } from '@/constants';
import { PersonType } from '@/types/general-types';
import styled from '@emotion/styled';
import React from 'react';

type FormPropsType = {
  onAddButtonCLick: (person: PersonType) => void;
};

const FormWrapper = styled('form')`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  input {
    margin-right: 10px;
    width: 75%;
    border-radius: 10px;
    border: 1px gray solid;
    padding: 7px 15px
  }

  button {
    background-color: ${CSSVariable.BUTTON_COLOR};
    border: none;
    border-radius: 10px;
    padding: 7px 15px;
    font-weight: bold;
  }
`;

export const Form: React.FunctionComponent<FormPropsType> = ({
  onAddButtonCLick,
}: FormPropsType) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <FormWrapper
      onSubmit={e => {
        e.preventDefault();

        if (inputRef.current) {
          onAddButtonCLick({
            name: inputRef.current.value,
            from: null,
            status: 0,
            to: null,
          });
          inputRef.current.value = '';
        }
      }}
    >
      <input placeholder="Введите имя" ref={inputRef} type="text" required />
      <button type="submit">Добавить</button>
    </FormWrapper>
  );
};
