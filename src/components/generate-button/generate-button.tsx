import React from 'react';

type GenerateButtonPropsType = {
  isDisabled: boolean;
  onDistributeButtonClick: () => void;
};

const GenerateButton: React.FunctionComponent<GenerateButtonPropsType> = ({
  isDisabled,
  onDistributeButtonClick,
}: GenerateButtonPropsType) => (
  <button disabled={isDisabled} type="button" onClick={() => onDistributeButtonClick()}>
    Распределить
  </button>
);

export default GenerateButton;
