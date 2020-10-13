import React from "react";
import './footer.scss'

const Footer = () => {
    return (
        <footer className="social">
            <section className="social__icons">
                <div className="social__item social__item--instagram">
                    <img src={require("../../assets/instagram.svg")} alt="instagram icon"/>
                </div>
                <div  className="social__item social__item--vk">
                    <img src={require("../../assets/vk.svg")} alt="vk icon"/>
                </div>
                <div  className="social__item social__item--youtube">
                    <img src={require("../../assets/youtube.svg")} alt="youtube icon"/>
                </div>
            </section>
        </footer>
    )
}

export default Footer;