import React, {Component} from "react";
import {Link} from "react-router-dom";
import './menu-nav-mobile.scss';

class MenuNavMobile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        };

    }

    handleShowMenu = () => {
        this.setState(state => ({
            menuOpen: !this.state.menuOpen
        }));
    }

    handleMenuItemClicked =() =>{
        this.setState(state => ({
            menuOpen: false
        }))
    }

    render() {
        return (
            <div className="navigation">
                <input type="checkbox" checked={this.state.menuOpen} className="navigation__checkbox" id="navi-toggle"
                       onChange={this.handleShowMenu}/>
                {/*//пустой div для того, что бы там отобразить горизонтальные палки*/}
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>

                <nav className='navigation__nav'>
                    <ul className='navigation__list'>
                        <li className='vertical-margin' onClick={this.handleMenuItemClicked}><Link className="navigation__link" to={"/videos"}>Видео</Link></li>
                        <li className='vertical-margin' onClick={this.handleMenuItemClicked}><Link className="navigation__link" to={"/news"}>Концерты</Link></li>
                        <li className='vertical-margin' onClick={this.handleMenuItemClicked}><Link className="navigation__link" to={"/about"}>О Нас</Link></li>
                        <li className='vertical-margin' onClick={this.handleMenuItemClicked}><Link className="navigation__link" to={"/contact"}>Контакты</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }

}

export default MenuNavMobile;