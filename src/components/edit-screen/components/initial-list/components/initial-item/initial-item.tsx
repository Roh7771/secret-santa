import styled from '@emotion/styled';
import React from 'react';

type InitialItemPropsType = {
  name: string;
  onDeleteButtonClick: (personNameToDelete: string) => void;
};

const InitialItemWrapper = styled('div')`
  background-color: #cccccc;
  padding: 10px 40px 10px 15px;
  border-radius: 20px;
  position: relative;
  margin: 5px 5px;

  button {
    position: absolute;
    background-color: transparent;
    border: none;
    font-size: 25px;
    top: 0px;
    right: 5px;
    line-height: 40px;
    cursor: default !important;
  }
  
  span {
    cursor: pointer;
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
      <span>&#215;</span>
    </button>
  </InitialItemWrapper>
);
