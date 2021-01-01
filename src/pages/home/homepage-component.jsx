import React from "react";
import {useHistory} from 'react-router-dom';
import './homepage.scss';
import '../about/about-page-style.scss';
import ReactGA from 'react-ga';

const HomePage = () => {
    const history = useHistory();

    const handleNewsClicked = () => {
        history.push('./events');
        ReactGA.event({
            category: 'Button',
            action: 'Click Afisha button from home page'
        });
    }

    return (
        <section className="content responsive-container">
            <div className="content__text">
                <img src="https://picsum.photos/id/1082/300/200" alt="cover"/>
                <h1>Smile<span className="deco-one">busters</span></h1>
                <p>Детская музыкальная</p>
                <p>джаз - <span className="deco-one">funk</span> - фьюжн группа</p>
                <button className='btn margin-top' onClick={handleNewsClicked}>Афиша</button>
            </div>
        </section>
    );
};

export default HomePage;