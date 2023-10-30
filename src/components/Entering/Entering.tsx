import React from 'react';
import './Entering.scss';
import { BlackButton } from '../../ui/BlackButton';

type Props = {
  modal: Modal;
  setModal: (modal: string) => void;
}

export const Entering: React.FC<Props> = ({ modal, setModal }) => {
  const handlerRegister = () => {
    setModal(modal.register);
  }

  const handlerLogin = () => {
    setModal(modal.login);
  }

  return (
    <div className="entering">
      <BlackButton
        text='Register'
        handler={handlerRegister}
      />

      <button
        type="button"
        className="entering__login"
        onClick={handlerLogin}
      >
        Login
      </button>
    </div>
  );
};
