import React from 'react';
import './BlackButton.scss';
import classNames from 'classnames';

type Props = {
  isShown?: boolean;
  text: string;
  handler: () => void;
}

export const BlackButton: React.FC<Props> = ({
  isShown = false,
  text,
  handler
}) => {
  return (
    <button
      type="button"
      className={classNames("blackButton", {
        "blackButton__isShown": isShown,
      })}
      onClick={handler}
    >
      {text}
    </button>
  );
};
