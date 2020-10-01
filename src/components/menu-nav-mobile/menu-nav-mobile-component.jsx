import React from "react";
import './menu-nav-mobile-new.scss';
import {Link} from "react-router-dom";

const MenuNavMobile = () => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
            {/*//пустой div для того, что бы там отобразить горизонтальные палки*/}
            <label htmlFor="navi-toggle" className="navigation__button">MENU</label>
            <div className="navigation__background">&nbsp </div>

            <nav className='navigation__nav'>
                <ul className='navigation__list'>
                    <li className='navigation__item'><Link className="navigation__link" to={"#"}>Video</Link></li>
                    <li className='navigation__item'><Link className="navigation__link" to={"#"}>About</Link></li>
                    <li className='navigation__item'><Link className="navigation__link" to={"#"}>Contact</Link></li>
                </ul>
            </nav>

        </div>
    )
}
export default MenuNavMobile;