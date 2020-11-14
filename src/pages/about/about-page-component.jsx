import React from "react";
import CREW_DATA from "./crew-data";

class AboutPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            crew: CREW_DATA
        }
    }

    render() {
        const {crew} = this.state;
        return (
            <article className='responsive-container'>
                <header className='about-header'>
                    <h2 className='main-header'>Наша История</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam cumque dolor error fuga porro
                        quae
                        recusandae similique ullam voluptas! Beatae doloribus dolorum explicabo maiores pariatur
                        provident
                        quo,
                        soluta voluptates.
                    </p>
                    <h3 className='secondary-header'>Команда</h3>
                </header>
                <section className="cards">
                    {
                        crew.map(person => (
                            <section className="card" key={person.id}>
                                <img src={person.img_url} alt="Person1"/>
                                <div className='card__info'>
                                    <h4 className="crew__item crew__name">{person.name}</h4>
                                    <h5 className="crew__item crew__instrument">{person.instrument}</h5>
                                    <p>{person.info}</p>
                                </div>
                            </section>
                        ))
                    }
                </section>
            </article>
        )
    }
}

export default AboutPage;