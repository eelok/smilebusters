import React from "react";
import './menu-nav-mobile.scss';

const MenuNavMobile = () => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox"/>
            {/*//пустой div для того, что бы там отобразить горизонтальные палки*/}
            <label className="navigation__background">
                <div>&nbsp</div>
            </label>

            <nav className='navigation__nav'>
                <ul className='navigation__list'>
                    <li className='navigation__item'><a href="#">Video</a></li>
                    <li className='navigation__item'><a href="#">About</a></li>
                    <li className='navigation__item'><a href="#">Contact</a></li>
                </ul>
            </nav>

        </div>
    )
}
export default MenuNavMobile;