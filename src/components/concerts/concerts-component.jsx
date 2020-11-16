import React from "react";
import {Link} from "react-router-dom";
import ConcertItem from "../concert-item/concert-item-component";
import './concerts-component-style.scss'

const Concerts = ({pageTitle, concerts, linkTitle, linkPath}) => {
    return (
        <div className="responsive-container">
            <header className="concerts-header">
                <h2 className="concerts-header__title">{pageTitle}</h2>
                <Link className="concerts-header__link" to={`/${linkPath}`} >{linkTitle}</Link>
            </header>
            <section className="concerts">
                {
                    concerts.map((concertDetails, index) => (
                        <ConcertItem key={index} {...concertDetails} />
                    ))
                }
            </section>
        </div>
    )
}

export default Concerts;