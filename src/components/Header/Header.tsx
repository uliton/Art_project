import { useState } from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "../MobileMenu";
import { RegistrationModal } from "../RegistrationModal";
import { LoginModal } from "../LoginModal";
import { Logo } from "../../ui/Logo";
import { Search } from "../../ui/Search";
import { MenuIcon } from "../../ui/MenuIcon";
import './Header.scss';

enum Modal {
  login = 'login',
  register = 'register',
}

export const Header: React.FC = () => {
  const [modal, setModal] = useState<string>('');
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handlerLogin = () => {
    setModal(Modal.login);
  }

  const handlerRegister = () => {
    setModal(Modal.register);
  }

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <div className="header container">
        <div className="header__left">
          <Link
            to="./"
            className="header__logo"
          >
            <Logo />
          </Link>

          <nav className="header__nav">
            <ul className="header__nav__list">
              <li className="header__nav__item">
                <Link
                  to="/artworks"
                  className="header__nav__link"
                >
                  Artworks
                </Link>
              </li>
              <li className="header__nav__item">
                <Link
                  to="/artists"
                  className="header__nav__link"
                >
                  Artists
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__middle">
          <Search />
        </div>

        <div className="header__right">
          <button
              type="button"
              className="header__register"
              onClick={handlerRegister}
          >
              Register
          </button>

          <button
              type="button"
              className="header__login"
              onClick={handlerLogin}
          >
              Login
          </button>

          <button
            className="header__menu"
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </button>
        </div>

        <MobileMenu
          isMenuOpen={isMenuOpen}
          handleCloseMenu={handleCloseMenu}
        />
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
