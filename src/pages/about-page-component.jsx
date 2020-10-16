import React from "react";

const AboutPage = () => {
    return (
        <article className="crew">
            <section className='crew__story'>
                <h3>Our Story</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam cumque dolor error fuga porro
                    quae
                    recusandae similique ullam voluptas! Beatae doloribus dolorum explicabo maiores pariatur provident
                    quo,
                    soluta voluptates.</p>
            </section>
            <h2>Crew</h2>
            <div className="crew__box">
                <div className="crew__img"><img  src="https://picsum.photos/id/1027/345/200" alt="Person1"/></div>
                <div className="crew__info">
                    <h4 className="crew__name">Anastasia Tkachenko</h4>
                    <h4 className="crew__instrument">Piano</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda natus
                    nobis suscipit unde! Commodi consectetur eligendi harum officia officiis, repellat?</p>
                </div>
            </div>
            <div className="crew__box">
                <div className="crew__img"><img  src="https://picsum.photos/id/836/345/200" alt="Person1"/></div>
                <div className="crew__info">
                    <h4 className="crew__name">Bob Marley</h4>
                    <h4 className="crew__instrument">Guitar</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda natus
                        nobis suscipit unde! Commodi consectetur eligendi harum officia officiis, repellat?</p>
                </div>
            </div>
            <div className="crew__box">
                <div className="crew__img"><img  src="https://picsum.photos/id/91/345/200" alt="Person1"/></div>
                <div className="crew__info">
                    <h4 className="crew__name">Tom Tailor</h4>
                    <h4 className="crew__instrument">Guitar</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda natus
                        nobis suscipit unde! Commodi consectetur eligendi harum officia officiis, repellat?</p>
                </div>
            </div>
            <div className="crew__box">
                <div className="crew__img"><img  src="https://picsum.photos/id/856/345/200" alt="Person1"/></div>
                <div className="crew__info">
                    <h4 className="crew__name">Adriano Chellinatano</h4>
                    <h4 className="crew__instrument">Drums</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda natus
                        nobis suscipit unde! Commodi consectetur eligendi harum officia officiis, repellat?</p>
                </div>
            </div>
        </article>
    )
}
export default AboutPage;