import { Link } from "react-router-dom";
import './MobileMenu.scss';
import header from  '../Header.module.scss';
import Search from "./Search";

type Props = {
    isMenuOpen: boolean;
    handleCloseMenu: () => void;
};

const MobileMenu = ({ isMenuOpen, handleCloseMenu }: Props) => {

    const toggleMenu = () => {
        handleCloseMenu();
    };

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLElement;
        if (target.closest('ul') !== null) {
            handleCloseMenu();
        }
    };

    return (
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <button className="menu-toggle" onClick={toggleMenu}>
                <img src="/closeIcon.svg" alt="close" />
            </button>
            <div className="menu-content">
                <div className="menu-search-container">
                    <Search />
                </div>
                <nav>
                    <ul onClick={handleMenuClick}>
                        <li>
                            <Link to="/artworks">Artworks</Link>
                        </li>
                        <li>
                            <Link to="/artists">Artists</Link>
                        </li>
                    </ul>
                    <ul onClick={handleMenuClick}>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu;