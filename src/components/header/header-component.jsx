import React from "react";
import {Link} from "react-router-dom";
import './header.scss';
import {ReactComponent as Logo} from '../../assets/smilebusters.svg'
import MenuNavMobile from "../menu-nav-mobile/menu-nav-mobile-component";

const Header = () => {
    return (
        <header className="header responsive-container">
            <Link to={'/'}>
                <Logo className="header__icon"/>
            </Link>
            <MenuNavMobile/>
        </header>
    )
}
export default Header;