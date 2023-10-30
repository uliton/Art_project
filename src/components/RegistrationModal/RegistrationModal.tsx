import React, { useEffect, useRef, useState } from 'react';
// import logo from '../Header/logo.svg';

import './RegistrationModal.scss';
import { Link } from 'react-router-dom';
import { Logo } from '../../ui/Logo';
import { addNewUser } from '../../api/artworks';
import classNames from 'classnames';
import { CrimsonButton } from '../../ui/CrimsonButton';

type Props = {
  modalType: string,
  setModal: (_: string) => void
}

enum ERROR_TEXT {
  nameIsRequired = 'Name is required',
  nameIsTooSmall = 'Name is to small',
  emailIsRequired = 'Email is required',
  emailIsNotAvailable = 'Email is not available',
  passwordIsRequired = 'Password is required',
  passwordIsTooSmall = 'Password should be at least 8 characters',
  termsIsRequired = 'The terms and conditions should be accepted',
}

export const RegistrationModal:React.FC<Props> = ({ modalType, setModal }) => {
  // #region states
  const [name, setName] = useState<string>('');
  const [nameErrorMessage, setNameErrorMessage] = useState<string>('');

  const [email, setEmail] = useState<string>('');
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
  const emailField = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState<string>('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');
  const passwordField = useRef<HTMLInputElement>(null);

  const [termsIsChecked, setTermsIsChecked] = useState<boolean>(false);
  const [termsErrorMessage, setTermsErrorMessage] = useState<string>('');
  
  const [serverErrorMessage, setServerErrorMessage] = useState<string>('');
  // #endregion
  // #region scroll disable
  if (modalType.length > 0) {
    document.body.style.overflow = 'hidden'
  }
  // #endregion
  // #region handlers
  // changes
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (nameErrorMessage) {
      setNameErrorMessage('');
    }
    setName(event.target.value);
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (emailErrorMessage) {
      setEmailErrorMessage('');
    }
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (passwordErrorMessage) {
      setPasswordErrorMessage('');
    }
    setPassword(event.target.value);
  }

  const handleTermsChange = () => {
    if (termsErrorMessage) {
      setTermsErrorMessage('');
    }
    setTermsIsChecked(!termsIsChecked);
  }

  // close
  const handlerClose = () => {
    // scroll enable
    document.body.style.overflow = 'auto'
    setModal('');
  }

  // change modal
  const handlerLoginModal = () => {
    setModal('login');
  }
  // #endregion
  // #region checking
  const checkingName = () => {
    if (name.length === 0) {
      setNameErrorMessage(ERROR_TEXT.nameIsRequired);
      return false;
    }

    if (name.length > 0 && name.length < 2) {
      setNameErrorMessage(ERROR_TEXT.nameIsTooSmall);
      return false;
    }

    return true;
  }

  const checkingEmail = () => {
    const regExp = new RegExp('^([A_Za-z0-9_-]+\.)*[A_Za-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$');
    if (email.length === 0) {
      setEmailErrorMessage(ERROR_TEXT.emailIsRequired);
      return false;
    }
    if (!email.match(regExp)) {
      setEmailErrorMessage(ERROR_TEXT.emailIsNotAvailable);
      return false;
    }

    return true;
  }

  const checkingPassword = () => {
    if (password.length === 0) {
      setPasswordErrorMessage(ERROR_TEXT.passwordIsRequired);
      return false;
    }
    if (password.length < 8) {
      setPasswordErrorMessage(ERROR_TEXT.passwordIsTooSmall);
      return false;
    }

    return true;
  }
  // #endregion

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!termsIsChecked) {
      setTermsErrorMessage(ERROR_TEXT.termsIsRequired)
    }

    const nameCheck = checkingName();
    const emailCheck = checkingEmail();
    const passwordCheck = checkingPassword();
    
    if (nameCheck && emailCheck && passwordCheck && termsIsChecked) {
      const registerData: User = {
        fullname: name,
        email: email,
        password: password,
      }

      // send request
      const addingUser = await addNewUser(registerData)
        .then(res => res);

        if (addingUser.status === 201) {
          setModal('');
      } else {
        setServerErrorMessage(addingUser.response.data.email[0].slice(0, -1));
      }
  

      // checking user. need to be shure the user NOT allready registered
      // if (true) {
      //   setModal('');
      // }
    }

    // console.log('submit')
  }

  // const reset = () => {
  //   console.log('reset')
  // }

  return (
    <div className='modal'>
      <div className="modal__area" onClick={handlerClose}></div>
      
      <div className="modal__container">
        <div className="modal__header">
          <Link to="./" className='modal__header__img'>
            <Logo />
          </Link>

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
            Join our community and experience the unlimited possibilities of Bound Gallery!
          </div>

          {/* FORM */}
          <form
            action=""
            onSubmit={handleSubmit}
            // onReset={reset}
          >
            {serverErrorMessage && (
              <p
                className="modal__body__errorText"
                style={{textAlign: 'center'}}
              >
              {serverErrorMessage}
            </p>
            )}

            <div className="modal__body__inputs">
              <label htmlFor="inputs_name">
                Full name
                <input
                  type="text"
                  id="inputs_name"
                  value={name}
                  onChange={handleNameChange}
                  onBlur={checkingName}
                />
              </label>
              {nameErrorMessage && (
                <p className="modal__body__errorText">
                  {nameErrorMessage}
                </p>
              )}

              <label htmlFor="inputs_email">
                Email address
                <input
                  type="text"
                  id="inputs_email"
                  ref={emailField}
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={checkingEmail}
                />
              </label>
              {emailErrorMessage && (
                <p className="modal__body__errorText">
                  {emailErrorMessage}
                </p>
              )}

              <label htmlFor="inputs_password">
                Password
                <input
                  type="password"
                  id="inputs_password"
                  ref={passwordField}
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={checkingPassword}
                />
              </label>
              {passwordErrorMessage && (
                <p className="modal__body__errorText">
                  {passwordErrorMessage}
                </p>
              )}
            </div>

            <div className="modal__body__terms">
              <label htmlFor="terms">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsIsChecked}
                  onChange={handleTermsChange}
                />
                I accept the
              </label>
              <p>
                terms and conditions
              </p>
            </div>
            {termsErrorMessage && (
              <p className="modal__body__errorText">
              {termsErrorMessage}
            </p>
            )}

            <CrimsonButton
              isNotReady={(nameErrorMessage.length || emailErrorMessage.length || passwordErrorMessage.length || !termsIsChecked)}
              text="Register"
              buttonType="submit"
            />
          </form>

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
