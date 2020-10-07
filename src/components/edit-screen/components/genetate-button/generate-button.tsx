import { CSSVariable } from '@/constants';
import styled from '@emotion/styled';
import React from 'react';

type GenerateButtonPropsType = {
  isDisabled: boolean;
  onDistributeButtonClick: () => void;
};

const GenerateButtonItem = styled('button')`
  background-color: ${CSSVariable.BUTTON_COLOR};
  border: none;
  border-radius: 10px;
  padding: 15px;
  font-size: 24px;
  display: block;
  width: 30%;
  margin: 0 auto;
  line-height: 24px;
  margin-bottom: 30px;
`;

export const GenerateButton: React.FunctionComponent<GenerateButtonPropsType> = ({
  isDisabled,
  onDistributeButtonClick,
}: GenerateButtonPropsType) => (
  <GenerateButtonItem
    disabled={isDisabled}
    type="button"
    onClick={() => onDistributeButtonClick()}
  >
    Распределить!!!
  </GenerateButtonItem>
);
