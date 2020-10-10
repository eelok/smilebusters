import React from "react";
import {Link} from "react-router-dom";
import './header.scss'
import MenuNavMobile from "../menu-nav-mobile/menu-nav-mobile-component";

const Header = () => {
    return (
        <>
            <header className="header">
                <Link className="header__logo" to={'/'}>Smilebusters</Link>
                <MenuNavMobile/>
            </header>
        </>
    )
}
export default Header;