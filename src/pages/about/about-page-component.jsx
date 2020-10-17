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
            <article className="crew">
                <section className='crew__story'>
                    <h3>Our Story</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam cumque dolor error fuga porro
                        quae
                        recusandae similique ullam voluptas! Beatae doloribus dolorum explicabo maiores pariatur
                        provident
                        quo,
                        soluta voluptates.</p>
                </section>
                <h2>Crew</h2>
                <div className="crew__box">
                    {
                        crew.map(person => (
                            <>
                                <div className="crew__img"><img src={person.img_url} alt="Person1"/></div>
                                <div className="crew__info">
                                    <h4 className="crew__name">{person.name}</h4>
                                    <h4 className="crew__instrument">{person.instrument}</h4>
                                    <p>{person.info}</p>
                                </div>
                            </>
                        ))
                    }
                </div>
            </article>
        )
    }
}

export default AboutPage;