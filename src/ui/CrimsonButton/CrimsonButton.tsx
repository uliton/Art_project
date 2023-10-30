import React from 'react';
import './CrimsonButton.scss';
import classNames from 'classnames';

type Props = {
  buttonType?: "button" | "submit" | "reset" | undefined;
  isNotReady?: number | boolean;
  text: string;
  handler?: () => void;
}

export const CrimsonButton: React.FC<Props> = ({
  buttonType = "button",
  isNotReady = false,
  text,
  handler
}) => {
  return (
    <button
      type={buttonType}
      className={classNames("crimsonButton", {
        "crimsonButton__isNotReady": isNotReady,
      })}
      onClick={handler}
    >
      {text}
    </button>
  );
};
