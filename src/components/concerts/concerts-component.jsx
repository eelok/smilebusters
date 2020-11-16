import React from "react";
import {Link} from "react-router-dom";
import ConcertItem from "../concert-item/concert-item-component";

const Concerts = ({pageTitle, concerts, linkTitle, linkPath}) => {

    return (
        <div className="responsive-container">
            <header className="concerts-header">
                <h2>{pageTitle}</h2>
                <Link className="concerts-header__archive" to={`/${linkPath}`} >{linkTitle}</Link>
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