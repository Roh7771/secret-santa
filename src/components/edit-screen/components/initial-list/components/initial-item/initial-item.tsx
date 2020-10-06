import styled from '@emotion/styled';
import React from 'react';

type InitialItemPropsType = {
  name: string;
  onDeleteButtonClick: (personNameToDelete: string) => void;
};

const InitialItemWrapper = styled('div')`
  background-color: silver;
  padding: 10px 15px;
  border-radius: 10px;
  position: relative;

  button {
    position: absolute;
    background-color: inherit;
    border: none;
    font-size: 30px;
    top: 0px;
    right: 5px;
    line-height: 40px
  }
`;

export const InitialItem: React.FunctionComponent<InitialItemPropsType> = ({
  name,
  onDeleteButtonClick,
}: InitialItemPropsType) => (
  <InitialItemWrapper>
    <span>{name}</span>
    <button
      onClick={() => {
        onDeleteButtonClick(name);
      }}
      type="button"
    >
      &#215;
    </button>
  </InitialItemWrapper>
);
