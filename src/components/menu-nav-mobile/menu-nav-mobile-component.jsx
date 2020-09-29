import React from "react";
import './menu-nav-mobile.scss';

const MenuNavMobile =() =>{
    return(
        <div className="menu-wrap">
            <in put type="checkbox" className="toggler"/>
            <div className="hamburger"><div></div></div>
            <div className='menu'>
                <div>
                    <div>
                        <ul>
                            <li><a href="#">Video</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MenuNavMobile;