import React from "react";

import './homepage.scss'
import './about/about-page-style.scss'

const HomePage = () => {
    return (
        <section className="content responsive-container">
            <div className="content__text">
                <img src="https://picsum.photos/id/1082/300/200" alt="cover image"/>
                <h1>Smilebusters</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, expedita.</p>
                <p>jazz - funk - fusion band</p>
                <button className='btn margin-top'>News</button>
            </div>
        </section>
    )
}

export default HomePage;