import React from "react";
import './footer.scss'

const Footer = () => {
    return (
        <footer className="social">
            <section className="social__icons">
                <a className="social__item social__item--instagram"
                   href={`https://www.instagram.com/smilebustersband/`}
                >&nbsp;</a>
                <a className="social__item social__item--vk"
                   href={`https://vk.com/smilebusters/`}
                >&nbsp;</a>
                <a className="social__item social__item--youtube"
                   href={`https://www.youtube.com/channel/UCXhomF9JifKzZ4CbcP1zLtA/videos`}
                >&nbsp;</a>
            </section>
        </footer>
    )
}

export default Footer;