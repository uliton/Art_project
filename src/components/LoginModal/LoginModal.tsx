import React, { useState } from 'react';
import logo from '../Header/logo.svg';

import './LoginModal.scss';

type Props = {
  modalType: string,
  setModal: (_: string) => void
}

export const LoginModal:React.FC<Props> = ({ modalType, setModal }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // scroll disable
  if (modalType.length > 0) {
    document.body.style.overflow = 'hidden'
  }

  const handlerClose = () => {
    // scroll enable
    document.body.style.overflow = 'auto'
    setModal('');
  }

  const handlerRegisterModal = () => {
    setModal('register');
  }

  const handlerLogin = () => {
    if (email && password) {
      // send request
      console.log(email, password)

      // checking user. need to be shure the user allready registered
      if (true) {
        setModal('');
      }
    }
  }

  return (
    <div className='modal'>
      <div className="modal__area" onClick={handlerClose}></div>

      <div className="modal__container">
        <div className="modal__header">
          <img src={logo} alt="logo" className='modal__header__img' />

          <div
            className='modal__exit'
            onClick={handlerClose}
          ></div>
        </div>

        <div className="modal__body">
          <div className="modal__body__title modal__body__title--login">
            Login
          </div>

          <div className="modal__body__inputs modal__body__inputs--login">
            <label htmlFor="inputs_email">
              Email address
              <input
                type="text"
                id="inputs_email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </label>

            <label htmlFor="inputs_password inputs_password--login">
              Password
              <input
                type="password"
                id="inputs_password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </label>
          </div>

          <button
            type='button'
            className="modal__button"
            onClick={handlerLogin}
          >
            Sign in
          </button>

          <button
            type='button'
            className="modal__link"
            onClick={handlerRegisterModal}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
