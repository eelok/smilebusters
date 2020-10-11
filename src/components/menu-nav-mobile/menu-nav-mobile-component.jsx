import React from "react";
import {Link} from "react-router-dom";
import './menu-nav-mobile.scss';

const MenuNavMobile = () => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
            {/*//пустой div для того, что бы там отобразить горизонтальные палки*/}
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>

            <nav className='navigation__nav'>
                <ul className='navigation__list'>
                    <li><Link className="navigation__link" to={"/videos"}>Video</Link></li>
                    <li><Link className="navigation__link" to={"/about"}>About</Link></li>
                    <li><Link className="navigation__link" to={"/contact"}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default MenuNavMobile;