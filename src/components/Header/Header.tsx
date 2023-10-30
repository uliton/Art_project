import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "../MobileMenu";
import { RegistrationModal } from "../RegistrationModal";
import { LoginModal } from "../LoginModal";
import { Logo } from "../../ui/Logo";
import { Search } from "../../ui/Search";
import { MenuIcon } from "../../ui/MenuIcon";
import './Header.scss';
import classNames from "classnames";
import { getUser, test } from "../../api/artworks";
import { Entering } from "../Entering";
import { UserIcon } from "../../ui/UserIcon";

enum Modal {
  login = 'login',
  register = 'register',
}

enum Url {
  artworks = 'artworks',
  artists = 'artists',
}

type Props = {
  url?: string
}

export const Header: React.FC<Props> = ({ url }) => {
  const [enterStatus, setEnterStatus] = useState<boolean>(true);
  const [modal, setModal] = useState<string>('');
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    // getUser()
    //   .then(res => {
    //     setUser(res)
    //   });

    // test().then(res => {
    //   setUser(res)
    // })
  }, []);
  
  // console.log(user)

  return (
    <>
      <div className="header container">
        <div className="header__left">
          <Link
            to="/ "
            className="header__logo"
          >
            <Logo />
          </Link>

          <nav className="header__nav">
            <ul className="header__nav__list">
              <li className="header__nav__item">
                <Link
                  to="/artworks"
                  className={classNames('header__nav__link', {
                    'header__nav__link--select': Url.artworks === url,
                  })}
                >
                  Artworks
                </Link>
              </li>
              <li className="header__nav__item">
                <Link
                  to="/artists"
                  className={classNames('header__nav__link', {
                    'header__nav__link--select': Url.artists === url,
                  })}
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

        <div className={classNames({
          "header__right": enterStatus
        })}>
          {enterStatus
            ? (
              <UserIcon />
            )
            : (
              <Entering
                modal={Modal}
                setModal={setModal}
              />
            )
          }

          <button
            className="header__menu"
            onClick={handleOpenMenu}
            title="Menu"
          >
            <MenuIcon />
          </button>
        </div>

        <MobileMenu
          isMenuOpen={isMenuOpen}
          handleCloseMenu={handleCloseMenu}
          enterStatus={enterStatus}
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
