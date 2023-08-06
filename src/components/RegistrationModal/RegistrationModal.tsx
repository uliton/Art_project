import React, { useState } from 'react';
// import logo from '../Header/logo.svg';

import './RegistrationModal.scss';
import { Link } from 'react-router-dom';
import { Logo } from '../../ui/Logo';

type Props = {
  modalType: string,
  setModal: (_: string) => void
}

export const RegistrationModal:React.FC<Props> = ({ modalType, setModal }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [register] = useState<string>('');
  const [termsIsChecked, setTermsIsChecked] = useState<boolean>(false);

  // scroll disable
  if (modalType.length > 0) {
    document.body.style.overflow = 'hidden'
  }

  const handlerClose = () => {
    // scroll enable
    document.body.style.overflow = 'auto'
    setModal('');
  }

  const handlerLoginModal = () => {
    setModal('login');
  }

  const handlerRegister = () => {
    if (name && email && password && register && termsIsChecked) {
      // send request
      console.log(name, email, password, register, termsIsChecked)

      // checking user. need to be shure the user NOT allready registered
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
          <Link to="./" className='modal__header__img'>
            <Logo />
          </Link>
          {/* <img src={logo} alt="logo" className='modal__header__img' /> */}

          <div
            className='modal__exit'
            onClick={handlerClose}
          ></div>
        </div>

        <div className="modal__body">
          <div className="modal__body__title">
            Join Bound Gallery!
          </div>

          <div className="modal__body__subtitle">
            {/* Register as an Artist, Gallery or Artlover. */}
            Join our community and experience the unlimited possibilities of Bound Gallery!
          </div>

          {/* <div className="modal__body__register">
            Register as

            <div className="modal__body__register__wrapper">
              <label htmlFor="register_artist">
                <input
                  id="register_artist"
                  type="radio"
                  name="register"
                  value="artist"
                  checked={register === 'artist'}
                  onChange={(e) => {
                    setRegister(e.target.value);
                  }}
                />
                Artist
              </label>

              <label htmlFor="register_gallery">
                <input
                  id="register_gallery"
                  type="radio"
                  name="register"
                  value="gallery"
                  checked={register === 'gallery'}
                  onChange={(e) => {
                    setRegister(e.target.value);
                  }}
                />
                Gallery
              </label>

              <label htmlFor="register_artlover">
                <input
                  id="register_artlover"
                  type="radio"
                  name="register"
                  value="artlover"
                  checked={register === 'artlover'}
                  onChange={(e) => {
                    setRegister(e.target.value);
                  }}
                />
                Artlover
              </label>
            </div>
          </div> */}

          <div className="modal__body__inputs">
            <label htmlFor="inputs_name">
              Full name
              <input
                type="text"
                id="inputs_name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </label>

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

            <label htmlFor="inputs_password">
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

          <div className="modal__body__terms">
            <label htmlFor="terms">
              <input
                type="checkbox"
                id="terms"
                checked={termsIsChecked}
                onChange={() => {
                  setTermsIsChecked(!termsIsChecked)
                }}
              />
              I accept the
            </label>
            <p>
              terms and conditions
            </p>
          </div>

          <button
            type='button'
            className="modal__button"
            onClick={handlerRegister}
          >
            Register
          </button>

          <button
            type='button'
            className="modal__link"
            onClick={handlerLoginModal}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
