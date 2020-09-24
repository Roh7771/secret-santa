import React from 'react';

type InitialItemPropsType = {
  name: string;
  onDeleteButtonClick: (personNameToDelete: string) => void;
};

const InitialItem: React.FunctionComponent<InitialItemPropsType> = ({
  name,
  onDeleteButtonClick,
}: InitialItemPropsType) => (
  <div>
    <span>{name}</span>
    <button
      onClick={() => {
        onDeleteButtonClick(name);
      }}
      type="button"
    >
      Удалить
    </button>
  </div>
);

export default InitialItem;
