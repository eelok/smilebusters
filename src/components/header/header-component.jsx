import React from "react";
import {Link} from "react-router-dom";
import './header.scss';
import {ReactComponent as Logo} from '../../assets/smilebusters.svg'
import MenuNavMobile from "../menu-nav-mobile/menu-nav-mobile-component";

const Header = () => {
    return (

        <div className="header-wrapper">
            <header className="header responsive-container">
                <Link to={'/'}  className="logo__wrapper">
                    <Logo className="header__icon"/>
                </Link>
                <MenuNavMobile/>
            </header>
        </div>

    )
}
export default Header;