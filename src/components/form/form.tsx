import React from 'react';
import { PersonType } from '../../general-types';

type FormPropsType = {
  onAddButtonCLick: (person: PersonType) => void;
};

const Form: React.FunctionComponent<FormPropsType> = ({
  onAddButtonCLick,
}: FormPropsType) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <form
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
      <input ref={inputRef} type="text" required />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default Form;
