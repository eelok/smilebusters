import React from "react";

import './homepage.scss'
import './about-page-style.scss'

const HomePage = () => {
    return (
        <section className="content">
            <div className="content__text">
                <h1>Smilebusters</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, expedita.</p>
                <p>jazz - funk - fusion band</p>
                <button className='btn margin-top'>News</button>
            </div>
        </section>
    )
}

export default HomePage;