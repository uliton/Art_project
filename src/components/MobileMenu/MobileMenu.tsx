import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { RegistrationModal } from "../RegistrationModal";
import { LoginModal } from "../LoginModal";
import { Search } from "../../ui/Search";
import { CloseIcon } from "../../ui/CloseIcon";
import './MobileMenu.scss';

enum Modal {
  login = 'login',
  register = 'register',
}

type Props = {
    isMenuOpen: boolean;
    handleCloseMenu: () => void;
    enterStatus: boolean;
};

export const MobileMenu:React.FC<Props> = ({ isMenuOpen, handleCloseMenu, enterStatus }) => {
  const [modal, setModal] = useState<string>('');


  const toggleMenu = () => {
    handleCloseMenu();
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('ul') !== null) {
      handleCloseMenu();
    }
  };

  const handlerLogin = () => {
    setModal(Modal.login);
  }

  const handlerRegister = () => {
    setModal(Modal.register);
  }

    return (
      <>
        <div className={classNames('mobileMenu', {
          'mobileMenu--open': isMenuOpen,
        })}>
          <div className="mobileMenu__exit" onClick={toggleMenu}></div>

          <div className="mobileMenu__container">
            <button
              type="button"
              className="mobileMenu__exitButton"
              onClick={toggleMenu}
            >
              <CloseIcon />
            </button>

            <Search handleCloseMenu={handleCloseMenu} />

            <nav className="mobileMenu__nav">
              <ul
                className="mobileMenu__nav__list"
                onClick={handleMenuClick}
              >
                <li className="mobileMenu__nav__item">
                  <Link to="/artworks" className="mobileMenu__nav__link">
                    Artworks
                  </Link>
                </li>
                <li className="mobileMenu__nav__item">
                  <Link to="/artists" className="mobileMenu__nav__link">
                    Artists
                  </Link>
                </li>

                {!enterStatus && (
                  <li
                    className="mobileMenu__nav__item"
                    onClick={handlerRegister}
                  >
                    <p className="mobileMenu__nav__link">
                      Register
                    </p>
                  </li>
                )}
                {!enterStatus && (
                  <li
                    className="mobileMenu__nav__item"
                    onClick={handlerLogin}
                  >
                    <p className="mobileMenu__nav__link">
                      Login
                    </p>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      
        {modal === Modal.register && (
          <RegistrationModal modalType={modal} setModal={setModal} />
        )}

        {modal === Modal.login && (
          <LoginModal modalType={modal} setModal={setModal} />
        )}
      </>
    );
};
