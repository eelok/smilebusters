import React from "react";
import './footer.scss'

const Footer = () => {
    return (
        <footer className="social">
            <section className="social__icons">
                <a href={`https://www.instagram.com/smilebustersband/`}>
                    <div className="social__item social__item--instagram">
                        <img src={require("../../assets/instagram.svg")} alt="instagram icon"/>
                    </div>
                </a>
                <a href={`https://vk.com/smilebusters/`}>
                    <div className="social__item social__item--vk">
                        <img src={require("../../assets/vk.svg")} alt="vk icon"/>
                    </div>
                </a>
                <a href={`https://www.youtube.com/channel/UCXhomF9JifKzZ4CbcP1zLtA/videos`}>
                    <div className="social__item social__item--youtube">
                        <img src={require("../../assets/youtube.svg")} alt="youtube icon"/>
                    </div>
                </a>
            </section>
        </footer>
    )
}

export default Footer;