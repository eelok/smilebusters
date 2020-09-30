import React from "react";
import './header.scss'
import MenuNavMobile from "../menu-nav-mobile/menu-nav-mobile-component";

const Header = () => {
    return (
        <>
            <MenuNavMobile/>
            <header className="header">
                <h1 className="header__logo">Smilebusters</h1>
            </header>
        </>
    )
}
export default Header;