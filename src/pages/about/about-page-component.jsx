import React from "react";
import CREW_DATA from "./crew-data";
import danil_1x from "../../assets/danil/danil-1x.jpg";

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
                    <h2 className='about-header__title'>Наша История</h2>
                    <p className='about-header__story'>
                        {crew.description}
                    </p>
                    <h3 className='secondary-header'>Команда</h3>
                </header>
                <section className="cards">
                    {
                        crew.persons.map(person => {
                            const [img_1x, img_2x] = person.img_url;
                            console.log(img_1x, img_2x);

                            return (
                                <section className="card" key={person.id}>
                                    <div className="card__image-cropper">
                                        <img
                                            src={img_1x}
                                            srcSet={`${img_1x} 1x, ${img_2x} 2x`}
                                            className='card__image'
                                            alt={person.name}
                                        />
                                    </div>
                                    <div className='card__info'>
                                        <h4 className="crew__item crew__name">{person.name}</h4>
                                        <h5 className="crew__item crew__instrument">{person.instrument}</h5>
                                        <p className="crew__item crew__description">{person.info}</p>
                                    </div>
                                </section>
                            )
                        })
                    }
                </section>
            </article>
        )
    }
}

export default AboutPage;